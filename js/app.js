// Görev durumları
const TASK_STATUS = {
    PENDING: 'pending',
    IN_PROGRESS: 'in-progress',
    COMPLETED: 'completed'
};

// Görev öncelikleri
const TASK_PRIORITY = {
    LOW: 'low',
    MEDIUM: 'medium',
    HIGH: 'high'
};

// Görev listesi
let tasks = [];
let currentFilter = 'all';

// LocalStorage'dan görevleri yükleme
function loadTasksFromStorage() {
    const storedTasks = localStorage.getItem('gerisayTasks');
    if (storedTasks) {
        tasks = JSON.parse(storedTasks);
    }
}

// LocalStorage'a görevleri kaydetme
function saveTasksToStorage() {
    // Timer'ları JSON.stringify yapamadığı için kaldırıyoruz
    const tasksToSave = tasks.map(task => {
        const { timer, ...rest } = task;
        return rest;
    });
    localStorage.setItem('gerisayTasks', JSON.stringify(tasksToSave));
}

/**
 * Görev ekleme - Saf fonksiyon yaklaşımı
 * @param {Event} event - Form submit olayı
 */
function addTask(event) {
    event.preventDefault();
    
    // Form verilerini topla
    const formData = getFormData();
    
    // Yeni görev oluştur
    const newTask = createTask(formData);

    // Görev listesini güncelle (immutable yaklaşım)
    const updatedTasks = [...tasks, newTask];
    
    // Durumu güncelle ve kullanıcıya bildir
    updateTaskState(updatedTasks);
    showFeedback('Görev başarıyla eklendi', 'success');
    
    // Formu sıfırla ve kapat
    closeAddTaskModal();
    document.getElementById('taskForm').reset();
}

/**
 * Form verilerini toplayan saf fonksiyon
 * @returns {Object} Form verileri
 */
function getFormData() {
    return {
        title: document.getElementById('taskTitle').value.trim(),
        description: document.getElementById('taskDescription').value.trim(),
        priority: document.getElementById('taskPriority').value,
        hours: parseInt(document.getElementById('taskHours').value) || 0,
        minutes: parseInt(document.getElementById('taskMinutes').value) || 0,
        seconds: parseInt(document.getElementById('taskSeconds').value) || 0
    };
}

/**
 * Yeni görev nesnesi oluşturan saf fonksiyon
 * @param {Object} data - Görev verileri
 * @returns {Object} Yeni görev nesnesi
 */
function createTask(data) {
    return {
        id: Date.now(),
        title: data.title,
        description: data.description,
        priority: data.priority,
        duration: {
            hours: data.hours,
            minutes: data.minutes,
            seconds: data.seconds
        },
        status: TASK_STATUS.PENDING,
        timer: null,
        remainingTime: null,
        createdAt: new Date().toISOString()
    };
}

/**
 * Görev durumunu güncelleyen fonksiyon
 * @param {Array} updatedTasks - Güncellenmiş görev listesi
 */
function updateTaskState(updatedTasks) {
    tasks = updatedTasks;
    saveTasksToStorage();
    filterTasks(currentFilter);
}

// Görevleri filtreleme
function filterTasks(status) {
    currentFilter = status;
    const taskList = document.getElementById('taskList');
    taskList.innerHTML = '';

    const filteredTasks = status === 'all' 
        ? tasks 
        : tasks.filter(t => t.status === status);

    filteredTasks.forEach(task => {
        const taskElement = createTaskElement(task);
        taskList.appendChild(taskElement);
    });

    // Filtre butonlarının durumunu güncelle
    const filters = document.querySelectorAll('.task-filter');
    filters.forEach(filter => {
        filter.classList.remove('active');
        if (filter.getAttribute('onclick').includes(status)) {
            filter.classList.add('active');
        }
    });
}

// Görev elementi oluşturma
function createTaskElement(task) {
    const div = document.createElement('div');
    div.className = 'task-item';
    
    // Kalan süreyi hesapla
    let timeDisplay = formatTime(task.duration.hours, task.duration.minutes, task.duration.seconds);
    if (task.remainingTime !== null) {
        const hours = Math.floor(task.remainingTime / 3600);
        const minutes = Math.floor((task.remainingTime % 3600) / 60);
        const seconds = task.remainingTime % 60;
        timeDisplay = formatTime(hours, minutes, seconds);
    }
    
    div.innerHTML = `
        <div class="task-status status-${task.status}">${getTaskStatusText(task.status)}</div>
        <div class="task-priority priority-${task.priority || 'medium'}">${getPriorityText(task.priority)}</div>
        <div class="task-details">
            <div class="task-title">${task.title}</div>
            <div class="task-description">${task.description || ''}</div>
            <div class="task-meta">
                <span class="task-created">${formatDate(task.createdAt)}</span>
                <span class="task-timer">${timeDisplay}</span>
            </div>
        </div>
        <div class="task-controls">
            <button class="btn btn-start" onclick="startTask(${task.id})" ${task.status === TASK_STATUS.COMPLETED ? 'disabled' : ''}>
                <i class="icon-play"></i> Başlat
            </button>
            <button class="btn btn-pause" onclick="pauseTask(${task.id})" ${!task.timer ? 'disabled' : ''}>
                <i class="icon-pause"></i> Duraklat
            </button>
            <button class="btn btn-reset" onclick="resetTask(${task.id})">
                <i class="icon-reset"></i> Sıfırla
            </button>
            <button class="btn btn-delete" onclick="deleteTask(${task.id})">
                <i class="icon-delete"></i> Sil
            </button>
        </div>
    `;

    return div;
}

// Öncelik metni
function getPriorityText(priority) {
    const priorityText = {
        [TASK_PRIORITY.LOW]: 'Düşük',
        [TASK_PRIORITY.MEDIUM]: 'Orta',
        [TASK_PRIORITY.HIGH]: 'Yüksek'
    };
    return priorityText[priority] || 'Orta';
}

// Tarih formatı
function formatDate(dateString) {
    if (!dateString) return '';
    const date = new Date(dateString);
    return date.toLocaleDateString('tr-TR', { 
        year: 'numeric', 
        month: 'short', 
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
    });
}

// Görev durum metni
function getTaskStatusText(status) {
    const statusText = {
        [TASK_STATUS.PENDING]: 'Beklemede',
        [TASK_STATUS.IN_PROGRESS]: 'Devam Ediyor',
        [TASK_STATUS.COMPLETED]: 'Tamamlandı'
    };
    return statusText[status];
}

// Görev başlatma
function startTask(taskId) {
    const task = tasks.find(t => t.id === taskId);
    if (!task) return;

    task.status = TASK_STATUS.IN_PROGRESS;
    task.remainingTime = calculateTotalSeconds(task.duration.hours, task.duration.minutes, task.duration.seconds);
    task.timer = setInterval(() => {
        if (task.remainingTime <= 0) {
            clearInterval(task.timer);
            task.status = TASK_STATUS.COMPLETED;
            task.remainingTime = 0;
            saveTasksToStorage();
        } else {
            task.remainingTime--;
        }
        filterTasks(currentFilter);
    }, 1000);

    saveTasksToStorage();
    filterTasks(currentFilter);
}

// Görev duraklatma
function pauseTask(taskId) {
    const task = tasks.find(t => t.id === taskId);
    if (!task || !task.timer) return;

    clearInterval(task.timer);
    task.timer = null;
    filterTasks(currentFilter);
}

// Görev sıfırlama
function resetTask(taskId) {
    const task = tasks.find(t => t.id === taskId);
    if (!task) return;

    if (task.timer) {
        clearInterval(task.timer);
        task.timer = null;
    }
    
    task.status = TASK_STATUS.PENDING;
    task.remainingTime = null;
    saveTasksToStorage();
    filterTasks(currentFilter);
}

/**
 * Görev silme - Fonksiyonel yaklaşım
 * @param {number} taskId - Silinecek görevin ID'si
 */
function deleteTask(taskId) {
    // Önce görevi bul
    const taskToDelete = tasks.find(t => t.id === taskId);
    if (!taskToDelete) {
        showFeedback('Görev bulunamadı', 'error');
        return;
    }
    
    // Eğer timer varsa temizle
    if (taskToDelete.timer) {
        clearInterval(taskToDelete.timer);
    }
    
    // Immutable yaklaşımla görevi listeden çıkar
    const updatedTasks = tasks.filter(t => t.id !== taskId);
    
    // Durumu güncelle
    updateTaskState(updatedTasks);
    
    // Kullanıcıya bildir
    showFeedback('Görev başarıyla silindi', 'success');
}

// Modal fonksiyonları
function openAddTaskModal() {
    document.getElementById('addTaskModal').style.display = 'block';
}

function closeAddTaskModal() {
    document.getElementById('addTaskModal').style.display = 'none';
}

// Pure function to format time units
const formatTimeUnit = (unit) => unit.toString().padStart(2, '0');

// Pure function to format time display
const formatTime = (hours, minutes, seconds) => 
    `${formatTimeUnit(hours)}:${formatTimeUnit(minutes)}:${formatTimeUnit(seconds)}`;

// Pure function to calculate total seconds
const calculateTotalSeconds = (hours, minutes, seconds) => 
    (hours * 3600) + (minutes * 60) + seconds;

/**
 * Kullanıcıya geri bildirim gösteren fonksiyon
 * @param {string} message - Gösterilecek mesaj
 * @param {string} type - Geri bildirim tipi (success, error, warning, info)
 */
function showFeedback(message, type = 'info') {
    // Mevcut geri bildirim varsa kaldır
    const existingFeedback = document.getElementById('feedback');
    if (existingFeedback) {
        existingFeedback.remove();
    }
    
    // Yeni geri bildirim oluştur
    const feedback = document.createElement('div');
    feedback.id = 'feedback';
    feedback.className = `feedback feedback-${type}`;
    feedback.setAttribute('role', 'alert');
    feedback.setAttribute('aria-live', 'assertive');
    
    feedback.innerHTML = `
        <div class="feedback-content">
            <span class="feedback-icon">${getFeedbackIcon(type)}</span>
            <span class="feedback-message">${message}</span>
        </div>
        <button class="feedback-close" aria-label="Kapat" onclick="closeFeedback()">&times;</button>
    `;
    
    // Geri bildirimi sayfaya ekle
    document.body.appendChild(feedback);
    
    // Belirli bir süre sonra otomatik kapat
    setTimeout(() => {
        closeFeedback();
    }, 5000);
}

/**
 * Geri bildirim tipi için ikon döndüren yardımcı fonksiyon
 * @param {string} type - Geri bildirim tipi
 * @returns {string} İkon HTML'i
 */
function getFeedbackIcon(type) {
    switch(type) {
        case 'success':
            return '✓';
        case 'error':
            return '✗';
        case 'warning':
            return '⚠';
        default:
            return 'ℹ';
    }
}

/**
 * Geri bildirimi kapatan fonksiyon
 */
function closeFeedback() {
    const feedback = document.getElementById('feedback');
    if (feedback) {
        feedback.classList.add('feedback-closing');
        setTimeout(() => {
            feedback.remove();
        }, 300);
    }
}

/**
 * Sayfa geçişleri için fonksiyon
 * @param {string} pageId - Gösterilecek sayfa ID'si
 */
function showPage(pageId) {
    // Tüm sayfaları gizle
    const pages = document.querySelectorAll('.page');
    pages.forEach(page => page.classList.remove('active'));
    
    // Seçilen sayfayı göster
    const selectedPage = document.getElementById(`page-${pageId}`);
    if (selectedPage) {
        selectedPage.classList.add('active');
    }
    
    // Menü linklerinin aktif durumunu güncelle
    const navLinks = document.querySelectorAll('.nav a');
    navLinks.forEach(link => {
        link.classList.remove('active');
        link.setAttribute('aria-current', 'false');
    });
    
    const activeLink = document.getElementById(`nav-${pageId}`);
    if (activeLink) {
        activeLink.classList.add('active');
        activeLink.setAttribute('aria-current', 'page');
    }
    
    // Rapor sayfası ise istatistikleri güncelle
    if (pageId === 'reports') {
        updateReportStats();
    }
    
    // Kullanıcıya sayfa geçişi hakkında bilgi ver
    const pageNames = {
        'tasks': 'Görevler',
        'reports': 'Raporlar',
        'settings': 'Ayarlar'
    };
    
    // Ekran okuyucular için bilgi
    const announcement = document.createElement('div');
    announcement.setAttribute('aria-live', 'polite');
    announcement.className = 'sr-only';
    announcement.textContent = `${pageNames[pageId] || pageId} sayfası görüntüleniyor`;
    document.body.appendChild(announcement);
    
    // Announcement'i kısa süre sonra kaldır
    setTimeout(() => {
        announcement.remove();
    }, 1000);
}

// Rapor istatistiklerini güncelleme
function updateReportStats() {
    // Durum istatistikleri
    const totalTasks = tasks.length;
    const completedTasks = tasks.filter(t => t.status === TASK_STATUS.COMPLETED).length;
    const inProgressTasks = tasks.filter(t => t.status === TASK_STATUS.IN_PROGRESS).length;
    
    document.getElementById('stat-total').textContent = totalTasks;
    document.getElementById('stat-completed').textContent = completedTasks;
    document.getElementById('stat-in-progress').textContent = inProgressTasks;
    
    // Öncelik istatistikleri
    const highPriorityTasks = tasks.filter(t => t.priority === TASK_PRIORITY.HIGH).length;
    const mediumPriorityTasks = tasks.filter(t => t.priority === TASK_PRIORITY.MEDIUM).length;
    const lowPriorityTasks = tasks.filter(t => t.priority === TASK_PRIORITY.LOW).length;
    
    document.getElementById('priority-high-count').textContent = highPriorityTasks;
    document.getElementById('priority-medium-count').textContent = mediumPriorityTasks;
    document.getElementById('priority-low-count').textContent = lowPriorityTasks;
}

// Tema değiştirme
function changeTheme(theme) {
    const body = document.body;
    
    if (theme === 'light') {
        body.style.background = '#f5f5f5';
        body.style.color = '#333';
    } else {
        body.style.background = '#1e2d3b';
        body.style.color = '#fff';
    }
    
    // Tema tercihini kaydet
    localStorage.setItem('gerisayTheme', theme);
}

// Tüm görevleri temizleme
function confirmClearTasks() {
    if (confirm('Tüm görevleri silmek istediğinize emin misiniz?')) {
        clearAllTasks();
    }
}

function clearAllTasks() {
    // Çalışan tüm timer'ları durdur
    tasks.forEach(task => {
        if (task.timer) {
            clearInterval(task.timer);
        }
    });
    
    tasks = [];
    saveTasksToStorage();
    filterTasks('all');
    updateReportStats();
}

// Görevleri dışa aktarma
function exportTasks() {
    const tasksToExport = tasks.map(task => {
        const { timer, ...rest } = task;
        return rest;
    });
    
    const dataStr = JSON.stringify(tasksToExport, null, 2);
    const dataUri = 'data:application/json;charset=utf-8,' + encodeURIComponent(dataStr);
    
    const exportLink = document.createElement('a');
    exportLink.setAttribute('href', dataUri);
    exportLink.setAttribute('download', 'gerisay-tasks.json');
    exportLink.click();
}

// Görevleri içe aktarma
function importTasks() {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = '.json';
    
    input.onchange = e => {
        const file = e.target.files[0];
        const reader = new FileReader();
        
        reader.onload = event => {
            try {
                const importedTasks = JSON.parse(event.target.result);
                
                // Çalışan tüm timer'ları durdur
                tasks.forEach(task => {
                    if (task.timer) {
                        clearInterval(task.timer);
                    }
                });
                
                tasks = importedTasks;
                saveTasksToStorage();
                filterTasks('all');
                updateReportStats();
                
                alert('Görevler başarıyla içe aktarıldı!');
            } catch (error) {
                alert('Dosya formatı geçersiz!');
                console.error('Import error:', error);
            }
        };
        
        reader.readAsText(file);
    };
    
    input.click();
}

// Sayfa yüklendiğinde
window.onload = () => {
    loadTasksFromStorage();
    filterTasks('all');
    
    // Timer'ları yüklenen görevler için yeniden başlat
    tasks.forEach(task => {
        if (task.status === TASK_STATUS.IN_PROGRESS && task.remainingTime > 0) {
            task.timer = setInterval(() => {
                if (task.remainingTime <= 0) {
                    clearInterval(task.timer);
                    task.status = TASK_STATUS.COMPLETED;
                    task.remainingTime = 0;
                    saveTasksToStorage();
                } else {
                    task.remainingTime--;
                }
                filterTasks(currentFilter);
            }, 1000);
        }
    });
    
    // Kaydedilen temayı yükle
    const savedTheme = localStorage.getItem('gerisayTheme');
    if (savedTheme) {
        changeTheme(savedTheme);
        document.getElementById('setting-theme').value = savedTheme;
    }
}