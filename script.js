/**
 * DIGITAL UNIVERSITY OF CAMBODIA (DUC) - Classroom Management Portal
 * Interactive Logic & Class Roster Management (43 Students)
 */

// Official Class Roster - DIGITAL UNIVERSITY OF CAMBODIA
let studentsData = [
  { id: 'DUC2024-0021', name: 'ក្លាន ផែន', latinName: 'KLAN PHAEN', gender: 'ស្រី', dob: '05/09/2004', status: 'present' },
  { id: 'DUC2024-0023', name: 'ក្លាន លូត', latinName: 'KLAN LOUT', gender: 'ប្រុស', dob: '02/10/2001', status: 'present' },
  { id: 'DUC2024-0024', name: 'ក្លាន ស្នាក', latinName: 'KLAN SNAK', gender: 'ប្រុស', dob: '10/09/2006', status: 'present' },
  { id: 'DUC2024-0033', name: 'ខុយ ស្រីនី', latinName: 'KHOUY SREYNY', gender: 'ស្រី', dob: '14/08/2002', status: 'present' },
  { id: 'DUC2024-0036', name: 'ខេង តាំងលី', latinName: 'KHENG TANGLY', gender: 'ស្រី', dob: '10/11/2003', status: 'present' },
  { id: 'DUC2024-0047', name: 'គង់ ស៊ាត', latinName: 'KONG SEAT', gender: 'ប្រុស', dob: '07/12/2004', status: 'present' },
  { id: 'DUC2024-0056', name: 'គឹម ស្រីពៅ', latinName: 'KIM SREYPOV', gender: 'ស្រី', dob: '03/06/2001', status: 'present' },
  { id: 'DUC2024-0079', name: 'ឃុន សេងលាប', latinName: 'KHOUN SENGLEAB', gender: 'ប្រុស', dob: '17/01/2006', status: 'present' },
  { id: 'DUC2024-0086', name: 'ចង់ ថុង', latinName: 'CHONG THONG', gender: 'ប្រុស', dob: '19/08/2003', status: 'present' },
  { id: 'DUC2024-0092', name: 'ចាន់ ឆៃយ៉ា', latinName: 'CHAN CHHAIYA', gender: 'ប្រុស', dob: '11/11/2005', status: 'present' },
  { id: 'DUC2024-0099', name: 'ចាន់ សើន', latinName: 'CHANN SEUN', gender: 'ប្រុស', dob: '11/07/2003', status: 'present' },
  { id: 'DUC2024-0144', name: 'ឈួន សុខលាង', latinName: 'CHHUON SOKLEANG', gender: 'ស្រី', dob: '09/03/2005', status: 'present' },
  { id: 'DUC2024-0185', name: 'ឌុច តុងហៀន', latinName: 'DUCH TONGHEAN', gender: 'ប្រុស', dob: '01/11/2003', status: 'present' },
  { id: 'DUC2024-0197', name: 'ណុប ចាម', latinName: 'NOB CHAM', gender: 'ប្រុស', dob: '22/02/2004', status: 'present' },
  { id: 'DUC2024-0211', name: 'តី វៃ', latinName: 'TEY VAI', gender: 'ប្រុស', dob: '04/04/2005', status: 'present' },
  { id: 'DUC2024-0213', name: 'តឿន ស្រីនាង', latinName: 'TOEUN SREYNEANG', gender: 'ស្រី', dob: '03/09/2004', status: 'present' },
  { id: 'DUC2024-0272', name: 'នាង រ៉ាវី', latinName: 'NEANG RAVY', gender: 'ប្រុស', dob: '15/03/2006', status: 'present' },
  { id: 'DUC2024-0273', name: 'នាង សំរិទ្ធិ', latinName: 'NEANG SOMRITH', gender: 'ប្រុស', dob: '15/12/2004', status: 'present' },
  { id: 'DUC2024-0305', name: 'ប៉ាត ឈាងអុី', latinName: 'PAT CHEANGEI', gender: 'ស្រី', dob: '01/01/2005', status: 'present' },
  { id: 'DUC2024-0331', name: 'ប៉ៃ វុទ្ធារដ្ឋា', latinName: 'PAI VUTHAROTHA', gender: 'ប្រុស', dob: '05/10/2003', status: 'present' },
  { id: 'DUC2024-0414', name: 'មិ សាវៀន', latinName: 'MI SAVIEN', gender: 'ប្រុស', dob: '02/05/2002', status: 'present' },
  { id: 'DUC2024-0417', name: 'ម៉ុក សម្បត្តិ', latinName: 'MOK SAMBATH', gender: 'ប្រុស', dob: '01/12/2000', status: 'present' },
  { id: 'DUC2024-0425', name: 'មៀង ស្រីម៉ុំ', latinName: 'MIECH SREY MOM', gender: 'ស្រី', dob: '25/08/2004', status: 'present' },
  { id: 'DUC2024-0439', name: 'ម៉ៅ ស្រីឃៀម', latinName: 'MAO SREYKHIEM', gender: 'ស្រី', dob: '20/03/2002', status: 'present' },
  { id: 'DUC2024-0457', name: 'យ៉ុន ទូច', latinName: 'YON TOUCH', gender: 'ស្រី', dob: '15/09/2003', status: 'present' },
  { id: 'DUC2024-0474', name: 'យ៉ែម ដេវីត', latinName: 'YEM DEVIT', gender: 'ប្រុស', dob: '22/04/2006', status: 'present' },
  { id: 'DUC2024-0476', name: 'យ៉ែម ស៊ីនូន', latinName: 'YEM SINOUN', gender: 'ស្រី', dob: '25/12/2005', status: 'present' },
  { id: 'DUC2024-0479', name: 'រចំប៊ រវែន', latinName: 'ROCHOM BORVAEN', gender: 'ប្រុស', dob: '10/11/2002', status: 'present' },
  { id: 'DUC2024-0487', name: 'រ៉ូម៉ាស់ ខឿន', latinName: 'ROMAS KHOEUN', gender: 'ប្រុស', dob: '13/02/2003', status: 'present' },
  { id: 'DUC2024-0495', name: 'រាត់ រូន', latinName: 'RAT ROUN', gender: 'ប្រុស', dob: '02/01/2001', status: 'present' },
  { id: 'DUC2024-0519', name: 'រឿន លីម៉ា', latinName: 'ROEUN LIMA', gender: 'ប្រុស', dob: '23/04/2006', status: 'present' },
  { id: 'DUC2024-0588', name: 'វិ ថុន', latinName: 'VE THON', gender: 'ប្រុស', dob: '14/07/2002', status: 'present' },
  { id: 'DUC2024-0632', name: 'សល់ លិច', latinName: 'SOL LICH', gender: 'ប្រុស', dob: '02/01/2003', status: 'present' },
  { id: 'DUC2024-0659', name: 'សារឿន សេរីវឌ្ឍន៍', latinName: 'SAROEUN SEREYVATH', gender: 'ប្រុស', dob: '17/07/2004', status: 'present' },
  { id: 'DUC2024-0662', name: 'ស៊ិន ចាន់ថ្លា', latinName: 'SIN CHANTHLA', gender: 'ប្រុស', dob: '03/01/2005', status: 'present' },
  { id: 'DUC2024-0730', name: 'សេវ ឆ្វាត់', latinName: 'SEV CHHVATH', gender: 'ប្រុស', dob: '01/01/2002', status: 'present' },
  { id: 'DUC2024-0745', name: 'សៃ ស្រីតូច', latinName: 'SAI SREYTOUCH', gender: 'ស្រី', dob: '10/10/2002', status: 'present' },
  { id: 'DUC2024-0765', name: 'ហាំ ផល', latinName: 'HAM PHOL', gender: 'ប្រុស', dob: '12/05/2002', status: 'present' },
  { id: 'DUC2024-0789', name: 'ហួត ធានិន', latinName: 'HUOT THEANIN', gender: 'ប្រុស', dob: '30/11/2003', status: 'present' },
  { id: 'DUC2024-0802', name: 'ហៀន សុខពិសី', latinName: 'HEAN SOKPISEY', gender: 'ស្រី', dob: '24/03/2006', status: 'present' },
  { id: 'DUC2024-0803', name: 'ហៀម កាមុត', latinName: 'HIEM KAMOUT', gender: 'ប្រុស', dob: '03/03/2005', status: 'present' },
  { id: 'DUC2024-0807', name: 'ហេង ស៊ីវម៉េង', latinName: 'HENG SIVMENG', gender: 'ប្រុស', dob: '26/04/2005', status: 'present' },
  { id: 'DUC2024-0849', name: 'អ៊ុក ថាវ', latinName: 'OUK THAV', gender: 'ប្រុស', dob: '01/01/2003', status: 'present' }
];

document.addEventListener('DOMContentLoaded', () => {
  // Initialize Lucide Icons
  if (window.lucide) {
    window.lucide.createIcons();
  }

  // --- 0. Session & Role Management ---
  let currentSession = null;
  try {
    const raw = localStorage.getItem('duc-session');
    if (raw) currentSession = JSON.parse(raw);
  } catch(e) {}

  const isAdmin = currentSession && currentSession.role === 'admin';
  const isUser  = currentSession && currentSession.role === 'user';

  // Update UI with session info
  if (currentSession) {
    const displayName = isAdmin ? 'Administrator' : (currentSession.userName || currentSession.userId);
    const displayId   = isAdmin ? 'ADMIN • DUC System' : (currentSession.userId || '');

    // Update all user name/role elements
    document.querySelectorAll('.user-name').forEach(el => el.textContent = displayName);
    document.querySelectorAll('.user-role').forEach(el => el.textContent = `អត្តលេខ: ${displayId}`);
    document.querySelectorAll('.user-pill-info .name').forEach(el => el.textContent = displayName);
    document.querySelectorAll('.user-pill-info .role').forEach(el => el.textContent = displayId);

    // Update welcome title
    const welcomeGradient = document.querySelector('.welcome-title .gradient-text');
    if (welcomeGradient) welcomeGradient.textContent = isAdmin ? 'Administrator' : displayName;

    // Admin badge in topbar
    const userPill = document.querySelector('.user-pill');
    if (userPill && isAdmin) {
      const badge = document.createElement('span');
      badge.style.cssText = 'display:inline-block;padding:2px 8px;border-radius:5px;font-size:0.7rem;font-weight:700;background:rgba(245,158,11,0.2);color:#f59e0b;border:1px solid rgba(245,158,11,0.3);margin-left:4px;';
      badge.textContent = 'ADMIN';
      userPill.querySelector('.user-pill-info')?.appendChild(badge);
    }
  }

  // Add logout button to topbar
  const topbarRight = document.querySelector('.topbar-right');
  if (topbarRight) {
    const logoutBtn = document.createElement('button');
    logoutBtn.className = 'icon-btn';
    logoutBtn.title = 'ចេញពីប្រព័ន្ធ (Logout)';
    logoutBtn.setAttribute('aria-label', 'Logout');
    logoutBtn.style.cssText = 'color: #ef4444; border-color: rgba(239,68,68,0.3);';
    logoutBtn.innerHTML = '<i data-lucide="log-out"></i>';
    logoutBtn.addEventListener('click', () => {
      if (confirm('តើអ្នកចង់ចេញពីប្រព័ន្ធ DUC Portal មែនទេ?')) {
        localStorage.removeItem('duc-session');
        window.location.replace('login.html');
      }
    });
    topbarRight.appendChild(logoutBtn);
  }

  // Role-based: hide admin controls for regular users
  if (isUser) {
    // Hide "Mark All" and "Reset" buttons for regular users
    setTimeout(() => {
      const markAllBtn = document.getElementById('btn-mark-all-present');
      const resetBtn = document.getElementById('btn-reset-attendance');
      const saveBtn = document.getElementById('btn-save-attendance');
      const exportBtn = document.getElementById('btn-export-csv');
      const addCourseBtn = document.getElementById('btn-add-course');
      if (markAllBtn) markAllBtn.style.display = 'none';
      if (resetBtn) resetBtn.style.display = 'none';
      if (saveBtn) {
        saveBtn.disabled = true;
        saveBtn.title = 'តែ Admin ទេ អាចរក្សាទុកវត្តមាន';
        saveBtn.style.opacity = '0.5';
      }
      if (exportBtn && !isAdmin) exportBtn.style.display = 'none';
      if (addCourseBtn) addCourseBtn.style.display = 'none';

      // Disable all attend-toggle-btn for regular users (read-only)
      document.querySelectorAll('.attend-toggle-btn').forEach(btn => {
        btn.disabled = true;
        btn.title = 'តែ Admin ទេ អាចផ្លាស់ប្ដូរវត្តមាន';
      });
    }, 800);
  }


  // --- 1. Theme Management (Dark / Light) ---
  const htmlElement = document.documentElement;
  const themeToggleBtn = document.getElementById('theme-toggle');
  const savedTheme = localStorage.getItem('duc-theme') || 'dark';

  setTheme(savedTheme);

  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
      const currentTheme = htmlElement.getAttribute('data-theme');
      const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
      setTheme(newTheme);
    });
  }

  function setTheme(theme) {
    htmlElement.setAttribute('data-theme', theme);
    localStorage.setItem('duc-theme', theme);
    if (window.lucide) window.lucide.createIcons();
  }

  // --- 2. Tab Navigation ---
  const navBtns = document.querySelectorAll('.nav-btn');
  const pageViews = document.querySelectorAll('.page-view');

  navBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const target = btn.getAttribute('data-target');
      switchTab(target);

      // Close mobile sidebar if open
      const sidebar = document.getElementById('sidebar');
      if (sidebar) sidebar.classList.remove('active');
    });
  });

  window.switchTab = function(tabId) {
    navBtns.forEach(b => {
      if (b.getAttribute('data-target') === tabId) {
        b.classList.add('active');
      } else {
        b.classList.remove('active');
      }
    });

    pageViews.forEach(view => {
      if (view.id === `view-${tabId}`) {
        view.classList.add('active');
      } else {
        view.classList.remove('active');
      }
    });

    window.scrollTo({ top: 0, behavior: 'smooth' });
    if (window.lucide) window.lucide.createIcons();
  };

  // --- 3. Mobile Sidebar Toggle ---
  const mobileToggleBtn = document.getElementById('mobile-toggle-btn');
  const sidebarCloseBtn = document.getElementById('sidebar-close-btn');
  const sidebar = document.getElementById('sidebar');

  if (mobileToggleBtn && sidebar) {
    mobileToggleBtn.addEventListener('click', () => {
      sidebar.classList.add('active');
    });
  }

  if (sidebarCloseBtn && sidebar) {
    sidebarCloseBtn.addEventListener('click', () => {
      sidebar.classList.remove('active');
    });
  }

  // --- 4. Timetable Day Filtering ---
  const dayTabs = document.querySelectorAll('.day-tab');
  const timetableCards = document.querySelectorAll('.timetable-card');

  dayTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      dayTabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');

      const selectedDay = tab.getAttribute('data-day');

      timetableCards.forEach(card => {
        const cardDay = card.getAttribute('data-day');
        if (selectedDay === 'all' || cardDay === selectedDay) {
          card.style.display = 'flex';
          card.style.opacity = '1';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });

  // --- 5. Render & Manage Attendance Sheet (43 Students) ---
  const tableBody = document.getElementById('attendance-table-body');
  
  // Load saved attendance from localStorage if exists
  const savedAttendance = localStorage.getItem('duc-attendance-43');
  if (savedAttendance) {
    try {
      const parsed = JSON.parse(savedAttendance);
      if (Array.isArray(parsed) && parsed.length === studentsData.length) {
        studentsData = parsed;
      }
    } catch (e) {
      console.error(e);
    }
  }

  renderAttendanceTable();

  function renderAttendanceTable(query = '') {
    if (!tableBody) return;
    tableBody.innerHTML = '';

    const filterText = query.toLowerCase().trim();

    const filtered = studentsData.filter(s => {
      if (!filterText) return true;
      return s.id.toLowerCase().includes(filterText) ||
             s.name.toLowerCase().includes(filterText) ||
             s.latinName.toLowerCase().includes(filterText) ||
             s.dob.includes(filterText) ||
             s.gender.includes(filterText);
    });

    if (filtered.length === 0) {
      tableBody.innerHTML = `
        <tr>
          <td colspan="8" style="text-align: center; padding: 30px; color: var(--text-muted);">
            <i data-lucide="search-x" style="width: 32px; height: 32px; margin: 0 auto 8px auto; display: block;"></i>
            មិនមាននិស្សិតត្រូវនឹងការស្វែងរក "${query}" ឡើយ
          </td>
        </tr>
      `;
      if (window.lucide) window.lucide.createIcons();
      return;
    }

    filtered.forEach((student, index) => {
      const isMokSambath = student.id === 'DUC2024-0417';
      const initial = student.name.trim().charAt(student.name.indexOf(' ') + 1) || student.name.charAt(0);
      const avatarClass = student.gender === 'ប្រុស' ? 'avatar-m' : 'avatar-f';

      const tr = document.createElement('tr');
      if (isMokSambath) {
        tr.style.background = 'rgba(99, 102, 241, 0.08)';
      }

      tr.innerHTML = `
        <td><strong>${index + 1}</strong></td>
        <td><code>${student.id}</code></td>
        <td>
          <div class="student-col">
            <div class="avatar-initials ${avatarClass}">${initial}</div>
            <div>
              <strong>${student.name}</strong> ${isMokSambath ? '<span class="badge" style="margin: 0; padding: 1px 6px; font-size: 0.7rem;">You</span>' : ''}
            </div>
          </div>
        </td>
        <td><span style="font-family: 'Plus Jakarta Sans', sans-serif; font-weight: 600;">${student.latinName}</span></td>
        <td>
          <span class="gender-pill ${student.gender === 'ប្រុស' ? 'gender-male' : 'gender-female'}">
            ${student.gender}
          </span>
        </td>
        <td><span style="color: var(--text-secondary); font-size: 0.86rem;">${student.dob}</span></td>
        <td>
          <span class="status-tag ${getStatusClass(student.status)}" id="status-tag-${student.id}">
            ${getStatusLabel(student.status)}
          </span>
        </td>
        <td>
          <div class="attend-btn-group">
            <button class="attend-toggle-btn btn-present ${student.status === 'present' ? 'active' : ''}" onclick="updateStudentStatus('${student.id}', 'present')">វត្តមាន</button>
            <button class="attend-toggle-btn btn-perm ${student.status === 'permission' ? 'active' : ''}" onclick="updateStudentStatus('${student.id}', 'permission')">ច្បាប់</button>
            <button class="attend-toggle-btn btn-absent ${student.status === 'absent' ? 'active' : ''}" onclick="updateStudentStatus('${student.id}', 'absent')">អវត្តមាន</button>
          </div>
        </td>
      `;
      tableBody.appendChild(tr);
    });

    calculateAttendanceStats();
    if (window.lucide) window.lucide.createIcons();
  }

  function getStatusClass(status) {
    if (status === 'present') return 'ongoing';
    if (status === 'permission') return 'upcoming';
    return 'urgent';
  }

  function getStatusLabel(status) {
    if (status === 'present') return 'មានវត្តមាន (Present)';
    if (status === 'permission') return 'មានច្បាប់ (Permission)';
    return 'អវត្តមាន (Absent)';
  }

  window.updateStudentStatus = function(studentId, newStatus) {
    const student = studentsData.find(s => s.id === studentId);
    if (student) {
      student.status = newStatus;
      const searchInput = document.getElementById('roster-search');
      renderAttendanceTable(searchInput ? searchInput.value : '');
    }
  };

  function calculateAttendanceStats() {
    const total = studentsData.length;
    const present = studentsData.filter(s => s.status === 'present').length;
    const permission = studentsData.filter(s => s.status === 'permission').length;
    const absent = studentsData.filter(s => s.status === 'absent').length;

    const rate = Math.round(((present + permission * 0.5) / total) * 100 * 10) / 10;

    const totalElem = document.getElementById('total-students-count');
    const presentElem = document.getElementById('present-count');
    const permElem = document.getElementById('permission-count');
    const absentElem = document.getElementById('absent-count');
    const rateElem = document.getElementById('attendance-percentage');
    const dashRateElem = document.getElementById('dash-attendance-rate');

    if (totalElem) totalElem.textContent = `${total} នាក់`;
    if (presentElem) presentElem.textContent = present;
    if (permElem) permElem.textContent = permission;
    if (absentElem) absentElem.textContent = absent;
    if (rateElem) rateElem.textContent = `${rate}%`;
    if (dashRateElem) dashRateElem.textContent = `${rate}%`;
  }

  // Live Roster Search
  const rosterSearch = document.getElementById('roster-search');
  if (rosterSearch) {
    rosterSearch.addEventListener('input', (e) => {
      renderAttendanceTable(e.target.value);
    });
  }

  // Quick Attendance Actions
  const btnMarkAll = document.getElementById('btn-mark-all-present');
  if (btnMarkAll) {
    btnMarkAll.addEventListener('click', () => {
      studentsData.forEach(s => s.status = 'present');
      renderAttendanceTable();
      showToast('វត្តមានទាំងអស់', 'បានកំណត់វត្តមាន (Present) ជូននិស្សិតទាំង ៤៣ នាក់។');
    });
  }

  const btnReset = document.getElementById('btn-reset-attendance');
  if (btnReset) {
    btnReset.addEventListener('click', () => {
      studentsData.forEach(s => s.status = 'present');
      localStorage.removeItem('duc-attendance-43');
      renderAttendanceTable();
      showToast('កំណត់ឡើងវិញ', 'ទិន្នន័យវត្តមានត្រូវបានកំណត់ឡើងវិញ។');
    });
  }

  const btnExport = document.getElementById('btn-export-csv');
  if (btnExport) {
    btnExport.addEventListener('click', () => {
      let csvContent = "data:text/csv;charset=utf-8,No,StudentID,KhmerName,LatinName,Gender,DOB,Status\n";
      studentsData.forEach((s, idx) => {
        csvContent += `${idx + 1},${s.id},"${s.name}","${s.latinName}",${s.gender},${s.dob},${s.status}\n`;
      });
      const encodedUri = encodeURI(csvContent);
      const link = document.createElement("a");
      link.setAttribute("href", encodedUri);
      link.setAttribute("download", `DUC_Class_Roster_${new Date().toISOString().slice(0,10)}.csv`);
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      showToast('ទាញយកជោគជ័យ!', 'ឯកសារ CSV បញ្ជីរាយនាមនិស្សិតត្រូវបានទាញយក។');
    });
  }

  // Save Attendance Button
  const saveAttendanceBtn = document.getElementById('btn-save-attendance');
  if (saveAttendanceBtn) {
    saveAttendanceBtn.addEventListener('click', () => {
      localStorage.setItem('duc-attendance-43', JSON.stringify(studentsData));
      showToast('រក្សាទុកជោគជ័យ!', 'បញ្ជីវត្តមានសម្រាប់និស្សិតទាំង ៤៣ នាក់ ត្រូវបានកត់ត្រាក្នុងប្រព័ន្ធ DUC។');
    });
  }

  // --- 6. Notifications Dropdown ---
  const notifBtn = document.getElementById('notif-btn');
  const notifDropdown = document.getElementById('notif-dropdown');
  const markAllReadBtn = document.getElementById('mark-all-read');

  if (notifBtn && notifDropdown) {
    notifBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      notifDropdown.classList.toggle('active');
    });

    document.addEventListener('click', (e) => {
      if (!notifDropdown.contains(e.target) && e.target !== notifBtn) {
        notifDropdown.classList.remove('active');
      }
    });
  }

  if (markAllReadBtn) {
    markAllReadBtn.addEventListener('click', () => {
      document.querySelectorAll('.notif-item.unread').forEach(item => {
        item.classList.remove('unread');
      });
      const dot = document.querySelector('.notif-dot');
      if (dot) dot.style.display = 'none';
      showToast('បានអានទាំងអស់', 'សេចក្តីជូនដំណឹងទាំងអស់ត្រូវបានសម្គាល់ថាបានអានរួច។');
    });
  }

  // --- 7. Modals (Submit Assignment & Add Course) ---
  window.openSubmitModal = function(title, subject) {
    const modal = document.getElementById('submit-modal');
    const titleElem = document.getElementById('modal-assignment-title');
    const subjectElem = document.getElementById('modal-assignment-subject');

    if (titleElem) titleElem.textContent = title;
    if (subjectElem) subjectElem.textContent = `មុខវិជ្ជា: ${subject}`;

    if (modal) {
      modal.classList.add('active');
      modal.setAttribute('aria-hidden', 'false');
    }
  };

  const addCourseBtn = document.getElementById('btn-add-course');
  if (addCourseBtn) {
    addCourseBtn.addEventListener('click', () => {
      const modal = document.getElementById('add-course-modal');
      if (modal) {
        modal.classList.add('active');
        modal.setAttribute('aria-hidden', 'false');
      }
    });
  }

  window.closeModal = function(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
      modal.classList.remove('active');
      modal.setAttribute('aria-hidden', 'true');
    }
  };

  document.querySelectorAll('.modal-backdrop').forEach(modal => {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        modal.classList.remove('active');
        modal.setAttribute('aria-hidden', 'true');
      }
    });
  });

  // Assignment Submit Form
  const assignmentForm = document.getElementById('assignment-submit-form');
  if (assignmentForm) {
    assignmentForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const submitBtn = document.getElementById('btn-confirm-submit');
      submitBtn.disabled = true;
      submitBtn.innerHTML = `<span>កំពុងបញ្ជូន...</span>`;

      setTimeout(() => {
        assignmentForm.reset();
        submitBtn.disabled = false;
        submitBtn.innerHTML = `<i data-lucide="send"></i><span>បញ្ជូនកិច្ចការឥឡូវនេះ</span>`;
        closeModal('submit-modal');
        showToast('ប្រគល់កិច្ចការជោគជ័យ!', 'កិច្ចការរបស់អ្នកត្រូវបានផ្ញើជូនសាស្ត្រាចារ្យរួចរាល់។');
        if (window.lucide) window.lucide.createIcons();
      }, 1000);
    });
  }

  // Add Course Form
  const addCourseForm = document.getElementById('add-course-form');
  if (addCourseForm) {
    addCourseForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const code = document.getElementById('new-course-code').value.trim();
      const credits = document.getElementById('new-course-credits').value.trim();
      const title = document.getElementById('new-course-title').value.trim();
      const instructor = document.getElementById('new-course-instructor').value.trim();
      const desc = document.getElementById('new-course-desc').value.trim() || 'គ្មានការពិពណ៌នា';

      const container = document.getElementById('courses-container');
      if (container) {
        const newCard = document.createElement('div');
        newCard.className = 'course-card glass-panel';
        newCard.innerHTML = `
          <div class="course-card-top">
            <div class="course-code-badge">${code} • ${credits} Credits</div>
            <div class="course-progress-label">វឌ្ឍនភាព: <strong>0%</strong></div>
          </div>
          <h3 class="course-title">${title}</h3>
          <p class="course-desc">${desc}</p>
          
          <div class="course-progress-bar">
            <div class="progress-fill" style="width: 0%;"></div>
          </div>

          <div class="course-details-list">
            <div class="detail-line"><i data-lucide="user"></i> ${instructor}</div>
            <div class="detail-line"><i data-lucide="clock"></i> ម៉ោងសិក្សានឹងជូនដំណឹងពេលក្រោយ</div>
            <div class="detail-line"><i data-lucide="users"></i> និស្សិត: 43 នាក់</div>
          </div>

          <div class="course-card-actions">
            <button class="btn btn-outline btn-sm btn-full" onclick="downloadSyllabus('${title}')">
              <i data-lucide="download"></i>
              <span>ទាញយក Syllabus</span>
            </button>
            <button class="btn btn-primary btn-sm btn-full" onclick="openCourseDetails('${title}')">
              <i data-lucide="eye"></i>
              <span>មើលមេរៀន</span>
            </button>
          </div>
        `;
        container.prepend(newCard);
      }

      addCourseForm.reset();
      closeModal('add-course-modal');
      showToast('បន្ថែមមុខវិជ្ជាជោគជ័យ!', `មុខវិជ្ជា ${title} ត្រូវបានបញ្ចូលក្នុងប្រព័ន្ធ DUC។`);
      if (window.lucide) window.lucide.createIcons();
    });
  }

  // --- 8. Helper Actions ---
  window.downloadSyllabus = function(courseName) {
    showToast('កំពុងទាញយក...', `កំពុងទាញយក Syllabus សម្រាប់មុខវិជ្ជា ${courseName}`);
  };

  window.openCourseDetails = function(courseName) {
    showToast('បើកមេរៀន', `កំពុងបង្ហាញឯកសារស្លាយ និងមេរៀននៃមុខវិជ្ជា ${courseName}`);
  };

  window.openClassSession = function(courseName) {
    showToast('ចូលថ្នាក់រៀន', `កំពុងភ្ជាប់ទៅកាន់បន្ទប់រៀននិម្មិតសម្រាប់ ${courseName}`);
  };

  // --- 9. Global Search Filter ---
  const globalSearch = document.getElementById('global-search');
  if (globalSearch) {
    globalSearch.addEventListener('input', (e) => {
      const query = e.target.value.toLowerCase().trim();
      const courseCards = document.querySelectorAll('.course-card');
      const timetableCards = document.querySelectorAll('.timetable-card');

      courseCards.forEach(card => {
        const text = card.textContent.toLowerCase();
        card.style.display = text.includes(query) ? 'flex' : 'none';
      });

      timetableCards.forEach(card => {
        const text = card.textContent.toLowerCase();
        card.style.display = text.includes(query) ? 'flex' : 'none';
      });

      // Also search in attendance if attendance tab is active
      const rosterSearchElem = document.getElementById('roster-search');
      if (rosterSearchElem) {
        rosterSearchElem.value = query;
        renderAttendanceTable(query);
      }
    });
  }

  // Toast Function
  function showToast(title, desc) {
    const toast = document.getElementById('toast');
    const toastTitle = document.getElementById('toast-title');
    const toastDesc = document.getElementById('toast-desc');

    if (toastTitle) toastTitle.textContent = title;
    if (toastDesc) toastDesc.textContent = desc;

    if (toast) {
      toast.classList.add('active');
      setTimeout(() => {
        toast.classList.remove('active');
      }, 4000);
    }
  }
});
