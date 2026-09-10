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

      // Hide all admin-only elements for regular users
      document.querySelectorAll('.admin-only').forEach(el => el.style.display = 'none');

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
    const modal = document.getElementById('course-details-modal');
    const titleEl = document.getElementById('modal-course-title');
    if (modal && titleEl) {
      titleEl.textContent = courseName;
      
      const listContainer = modal.querySelector('.lesson-file-list');
      if (listContainer) {
        // Clear previously dynamically added items (keep defaults if desired, but better clear dynamic ones)
        const dynamicItems = listContainer.querySelectorAll('.dynamic-item');
        dynamicItems.forEach(item => item.remove());
        
        // Load from localStorage
        const storageKey = `duc-course-files-${courseName}`;
        const files = JSON.parse(localStorage.getItem(storageKey) || '[]');
        
        let currentSession = {};
        try {
          const raw = localStorage.getItem('duc-session');
          if (raw) currentSession = JSON.parse(raw);
        } catch(e) {}
        const isAdminSession = currentSession.role === 'admin';

        files.forEach(file => {
          const li = document.createElement('li');
          li.className = 'dynamic-item';
          li.style.cssText = 'display: flex; align-items: center; justify-content: space-between; padding: 12px; background: rgba(255,255,255,0.05); border-radius: 8px; border: 1px solid rgba(255,255,255,0.1); margin-top: 10px;';
          
          let deleteBtnHTML = '';
          if (isAdminSession) {
            deleteBtnHTML = `<button class="btn btn-outline btn-sm" style="color: #ef4444; border-color: rgba(239, 68, 68, 0.4);" title="លុបឯកសារ" onclick="deleteUploadedFile('${courseName}', '${file.name}', event)"><i data-lucide="trash-2"></i></button>`;
          }

          li.innerHTML = `
            <div style="display: flex; align-items: center; gap: 12px;">
              <i data-lucide="file" style="color: var(--primary);"></i>
              <span>${file.name} <span class="badge text-xs bg-green-500/10 text-green-500 ml-2">ថ្មី (New)</span></span>
            </div>
            <div style="display: flex; gap: 6px;">
              <button class="btn btn-outline btn-sm" title="មើលជា PDF" onclick="openPdfViewer('${file.name}')"><i data-lucide="eye"></i></button>
              <button class="btn btn-outline btn-sm" onclick="showToast('ទាញយក', 'កំពុងទាញយកឯកសារ')"><i data-lucide="download"></i></button>
              ${deleteBtnHTML}
            </div>
          `;
          listContainer.appendChild(li);
        });
      }

      modal.classList.add('active');
      if (window.lucide) window.lucide.createIcons();
    } else {
      showToast('បើកមេរៀន', `កំពុងបង្ហាញឯកសារស្លាយ និងមេរៀននៃមុខវិជ្ជា ${courseName}`);
    }
  };

  window.deleteUploadedFile = function(courseName, fileName, event) {
    if (event) event.stopPropagation();
    if (!confirm('តើអ្នកពិតជាចង់លុបឯកសារមេរៀននេះមែនទេ?')) return;
    
    const storageKey = `duc-course-files-${courseName}`;
    let files = JSON.parse(localStorage.getItem(storageKey) || '[]');
    files = files.filter(f => f.name !== fileName);
    localStorage.setItem(storageKey, JSON.stringify(files));
    
    if (window.uploadedFilesMemory && window.uploadedFilesMemory[fileName]) {
      delete window.uploadedFilesMemory[fileName];
    }
    
    showToast('ជោគជ័យ', 'ឯកសារមេរៀនត្រូវបានលុបចេញពីប្រព័ន្ធ។');
    // Refresh modal
    window.openCourseDetails(courseName);
  };

  window.uploadedFilesMemory = window.uploadedFilesMemory || {};

  window.openPdfViewer = function(fileName) {
    const modal = document.getElementById('pdf-viewer-modal');
    const titleEl = document.getElementById('pdf-viewer-title');
    const contentEl = document.getElementById('pdf-viewer-content');
    
    if (modal && titleEl && contentEl) {
      titleEl.textContent = fileName;
      
      const file = window.uploadedFilesMemory[fileName];
      
      if (file) {
        const url = URL.createObjectURL(file);
        const type = file.type || '';
        
        if (type.startsWith('image/')) {
          contentEl.innerHTML = `<img src="${url}" style="max-width: 100%; max-height: 100%; margin: 0 auto; object-fit: contain; border-radius: 8px;">`;
        } else if (type === 'application/pdf') {
          contentEl.innerHTML = `<iframe src="${url}" width="100%" height="100%" style="border: none; border-radius: 8px; background: #fff;"></iframe>`;
        } else if (type.startsWith('video/')) {
          contentEl.innerHTML = `<video src="${url}" controls style="max-width: 100%; max-height: 100%; border-radius: 8px; margin: 0 auto;"></video>`;
        } else {
          contentEl.innerHTML = `
            <div style="flex-grow: 1; background: #e2e8f0; border-radius: 8px; display: flex; align-items: center; justify-content: center; flex-direction: column; gap: 16px; border: 1px solid rgba(255,255,255,0.1); padding: 20px;">
               <i data-lucide="cloud-off" style="width: 64px; height: 64px; color: #64748b;"></i>
               <h4 style="font-weight: 600; font-size: 18px; color: #334155; text-align: center;">ត្រូវការភ្ជាប់ជាមួយ Google Docs / Office 365</h4>
               <p style="font-size: 14px; color: #64748b; text-align: center; max-width: 90%;">ឯកសារនេះត្រូវបាន Upload ពីកុំព្យូទ័ររបស់អ្នក (Local)។ ដើម្បីមើលឯកសារ Word, Excel ឬ PowerPoint ផ្ទាល់ក្នុង Browser តាមរយៈ Google Docs Viewer គឺតម្រូវឱ្យឯកសារនេះមាន Public URL (ឧ. ផ្ទុកលើ Cloud)។</p>
               <p style="font-size: 14px; color: #64748b; text-align: center; max-width: 90%;">នៅក្នុងប្រព័ន្ធពិតប្រាកដ ឯកសារនឹងត្រូវរក្សាទុកលើ Cloud ទើបអាចបើកបាន។ បច្ចុប្បន្ន សូមចុចប៊ូតុង "ទាញយក" ដើម្បីមើល។</p>
            </div>
          `;
        }
      } else {
        // Mock static files or lost session files
        let publicUrl = '';
        if (fileName.includes('Chapter 1')) {
          publicUrl = 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf';
        } else if (fileName.includes('Chapter 2')) {
          publicUrl = 'https://scholar.harvard.edu/files/torman_personal/files/samplepptx.pptx';
        }

        if (publicUrl) {
          const gviewUrl = `https://docs.google.com/gview?url=${publicUrl}&embedded=true`;
          contentEl.innerHTML = `<iframe src="${gviewUrl}" width="100%" height="100%" style="border: none; border-radius: 8px; background: #fff;"></iframe>`;
        } else if (fileName.includes('Recording.mp4')) {
          contentEl.innerHTML = `
            <div style="flex-grow: 1; background: #e2e8f0; border-radius: 8px; display: flex; align-items: center; justify-content: center; flex-direction: column; gap: 16px; border: 1px solid rgba(255,255,255,0.1);">
               <i data-lucide="video" style="width: 64px; height: 64px; color: #64748b;"></i>
               <h4 style="font-weight: 600; font-size: 18px; color: #334155;">វីដេអូត្រូវបានលាក់ (Mockup)</h4>
               <p style="font-size: 14px; color: #64748b; text-align: center; max-width: 80%;">នៅក្នុងប្រព័ន្ធពិតប្រាកដ ទីនេះនឹងជាផ្ទាំងបង្ហាញវីដេអូ។</p>
            </div>
          `;
        } else {
          // It's a file from localStorage whose File object was lost on refresh
          contentEl.innerHTML = `
            <div style="flex-grow: 1; background: #e2e8f0; border-radius: 8px; display: flex; align-items: center; justify-content: center; flex-direction: column; gap: 16px; border: 1px solid rgba(255,255,255,0.1); padding: 20px;">
               <i data-lucide="file-warning" style="width: 64px; height: 64px; color: #eab308;"></i>
               <h4 style="font-weight: 600; font-size: 18px; color: #334155; text-align: center;">មិនអាចបង្ហាញឯកសារ (Local Mockup)</h4>
               <p style="font-size: 14px; color: #64748b; text-align: center; max-width: 90%;">ឯកសារ <b>${fileName}</b> នេះត្រូវបាន Upload រួចហើយ ប៉ុន្តែដោយសារប្រព័ន្ធកំពុងរត់ជាទម្រង់សាកល្បង (Local Mockup) រាល់ឯកសារដែល Upload នឹងបាត់បង់ការភ្ជាប់ (Preview) នៅពេលអ្នក Refresh គេហទំព័រ។</p>
               <p style="font-size: 14px; color: #64748b; text-align: center; max-width: 90%;">ដើម្បីសាកល្បងមុខងារ Preview សូម Upload ឯកសារ (PDF, រូបភាព...) ជាថ្មី រួចចុចមើលភ្លាមៗដោយកុំ Refresh។ (ប្រសិនបើជាឯកសារ Word/PPT សូមចុចទាញយកសិន។)</p>
            </div>
          `;
        }
      }

      modal.classList.add('active');
      if (window.lucide) window.lucide.createIcons();
    }
  };

  window.openClassSession = function(courseName) {
    showToast('ចូលថ្នាក់រៀន', `កំពុងភ្ជាប់ទៅកាន់បន្ទប់រៀននិម្មិតសម្រាប់ ${courseName}`);
  };

  // --- 9. Profile Image Upload ---
  const profileUploadInput = document.getElementById('profile-upload');
  const sidebarAvatar = document.getElementById('sidebar-user-avatar');
  const topbarAvatar = document.getElementById('topbar-user-avatar');

  // Determine unique storage key based on current session
  let profileStorageKey = 'duc-profile-image-default';
  if (currentSession && currentSession.userId) {
    profileStorageKey = `duc-profile-image-${currentSession.userId}`;
  } else if (isAdmin) {
    profileStorageKey = `duc-profile-image-admin`;
  }

  // Load saved profile image on load
  const savedProfileImage = localStorage.getItem(profileStorageKey);
  if (savedProfileImage) {
    if (sidebarAvatar) sidebarAvatar.style.backgroundImage = `url(${savedProfileImage})`;
    if (topbarAvatar) topbarAvatar.style.backgroundImage = `url(${savedProfileImage})`;
  }

  if (sidebarAvatar && profileUploadInput) {
    sidebarAvatar.addEventListener('click', () => {
      profileUploadInput.click();
    });

    profileUploadInput.addEventListener('change', (e) => {
      const file = e.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = function(event) {
          const img = new Image();
          img.onload = function() {
            // Resize image to save storage space
            const canvas = document.createElement('canvas');
            const MAX_SIZE = 250;
            let width = img.width;
            let height = img.height;

            if (width > height) {
              if (width > MAX_SIZE) {
                height *= MAX_SIZE / width;
                width = MAX_SIZE;
              }
            } else {
              if (height > MAX_SIZE) {
                width *= MAX_SIZE / height;
                height = MAX_SIZE;
              }
            }
            canvas.width = width;
            canvas.height = height;
            const ctx = canvas.getContext('2d');
            ctx.drawImage(img, 0, 0, width, height);
            const base64String = canvas.toDataURL('image/jpeg', 0.85);
            
            try {
              localStorage.setItem(profileStorageKey, base64String);
              sidebarAvatar.style.backgroundImage = `url(${base64String})`;
              if (topbarAvatar) topbarAvatar.style.backgroundImage = `url(${base64String})`;
              showToast('ជោគជ័យ!', 'រូបភាពប្រវត្តិរូបរបស់អ្នកត្រូវបានផ្លាស់ប្តូរ។');
            } catch(err) {
              showToast('បរាជ័យ', 'មានបញ្ហាក្នុងការរក្សាទុករូបភាព។');
            }
          };
          img.src = event.target.result;
        };
        reader.readAsDataURL(file);
      }
    });
  }

  // --- 10. Admin Actions ---
  const btnEditTimetable = document.getElementById('btn-edit-timetable');
  const btnAddAssignment = document.getElementById('btn-add-assignment');
  const btnAddAnnouncement = document.getElementById('btn-add-announcement');
  const btnEditGradebook = document.getElementById('btn-edit-gradebook');
  const txtEditGradebook = document.getElementById('text-edit-gradebook');

  let isEditingTimetable = false;
  if (btnEditTimetable) {
    btnEditTimetable.addEventListener('click', () => {
      const timetableCards = document.querySelectorAll('.timetable-card');
      const txtBtn = btnEditTimetable.querySelector('span');
      
      isEditingTimetable = !isEditingTimetable;
      
      if (isEditingTimetable) {
        if (txtBtn) txtBtn.textContent = 'រក្សាទុកកាលវិភាគ';
        btnEditTimetable.classList.remove('btn-outline');
        btnEditTimetable.classList.add('btn-primary');
        
        timetableCards.forEach(card => {
          const elementsToEdit = [
            card.querySelector('.subject-name'),
            card.querySelector('.day-tag-badge'),
            card.querySelector('.time-range'),
            card.querySelector('.room-pill'),
            card.querySelector('.instructor-row span') // the text inside instructor row
          ];
          
          elementsToEdit.forEach(el => {
            if (el) {
              el.setAttribute('contenteditable', 'true');
              el.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
              el.style.border = '1px dashed var(--border-focus)';
              el.style.outline = 'none';
              el.style.padding = '2px 4px';
              el.style.borderRadius = '4px';
            }
          });
        });
        showToast('របៀបកែប្រែ', 'អ្នកអាចចុចលើអក្សរក្នុងកាតដើម្បីធ្វើការកែប្រែបាន។');
      } else {
        if (txtBtn) txtBtn.textContent = 'កែប្រែកាលវិភាគ';
        btnEditTimetable.classList.remove('btn-primary');
        btnEditTimetable.classList.add('btn-outline');
        
        timetableCards.forEach(card => {
          const elementsToEdit = [
            card.querySelector('.subject-name'),
            card.querySelector('.day-tag-badge'),
            card.querySelector('.time-range'),
            card.querySelector('.room-pill'),
            card.querySelector('.instructor-row span')
          ];
          
          elementsToEdit.forEach(el => {
            if (el) {
              el.removeAttribute('contenteditable');
              el.style.backgroundColor = '';
              el.style.border = '';
              el.style.padding = '';
            }
          });
        });
        showToast('រក្សាទុកជោគជ័យ', 'ទិន្នន័យកាលវិភាគត្រូវបានរក្សាទុក។');
      }
    });
  }

  if (btnAddAssignment) {
    btnAddAssignment.addEventListener('click', () => {
      showToast('Admin', 'អ្នកអាចបន្ថែមមុខងារនេះជា Modal ដាក់កិច្ចការថ្មីនៅពេលក្រោយបាន។');
    });
  }

  if (btnAddAnnouncement) {
    btnAddAnnouncement.addEventListener('click', () => {
      showToast('Admin', 'ទម្រង់បញ្ចូលសេចក្តីជូនដំណឹងថ្មីកំពុងរៀបចំ...');
    });
  }

  // Editable Gradebook Logic
  let isEditingGradebook = false;
  if (btnEditGradebook) {
    btnEditGradebook.addEventListener('click', () => {
      const gradebookRows = document.querySelectorAll('#view-gradebook tbody tr');
      
      isEditingGradebook = !isEditingGradebook;
      
      if (isEditingGradebook) {
        // Switch to Edit Mode
        if (txtEditGradebook) txtEditGradebook.textContent = 'រក្សាទុកពិន្ទុ';
        btnEditGradebook.classList.remove('btn-primary');
        btnEditGradebook.classList.add('btn-outline');
        btnEditGradebook.style.borderColor = 'var(--color-green)';
        btnEditGradebook.style.color = 'var(--color-green)';
        
        gradebookRows.forEach(row => {
          // Columns 3 to 6 are the scores (0-indexed: 3, 4, 5, 6)
          for (let i = 3; i <= 6; i++) {
            const cell = row.cells[i];
            cell.setAttribute('contenteditable', 'true');
            cell.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
            cell.style.border = '1px dashed var(--border-focus)';
            cell.style.outline = 'none';
          }
        });
        showToast('របៀបកែប្រែ', 'អ្នកអាចចុចលើពិន្ទុដើម្បីធ្វើការកែប្រែបាន។');
      } else {
        // Switch to Save Mode
        if (txtEditGradebook) txtEditGradebook.textContent = 'បញ្ចូលពិន្ទុ';
        btnEditGradebook.classList.remove('btn-outline');
        btnEditGradebook.classList.add('btn-primary');
        btnEditGradebook.style.borderColor = '';
        btnEditGradebook.style.color = '';
        
        let totalGPA = 0;

        gradebookRows.forEach(row => {
          let totalScore = 0;
          for (let i = 3; i <= 6; i++) {
            const cell = row.cells[i];
            cell.removeAttribute('contenteditable');
            cell.style.backgroundColor = '';
            cell.style.border = '';
            
            const val = parseFloat(cell.textContent) || 0;
            totalScore += val;
          }
          
          // Update Total Score Cell (col 7)
          const totalCell = row.cells[7].querySelector('strong');
          if (totalCell) totalCell.textContent = totalScore.toFixed(1).replace('.0', '');
          
          // Calculate Grade & Update Grade Cell (col 8)
          let grade = 'F';
          let gradeClass = 'grade-a'; // Just reuse some class for F visually or dynamically add
          let gpaPoint = 0;
          
          if (totalScore >= 90) { grade = 'A'; gradeClass = 'grade-a'; gpaPoint = 4.0; }
          else if (totalScore >= 85) { grade = 'B+'; gradeClass = 'grade-b-plus'; gpaPoint = 3.5; }
          else if (totalScore >= 80) { grade = 'B'; gradeClass = 'grade-b-plus'; gpaPoint = 3.0; }
          else if (totalScore >= 70) { grade = 'C'; gradeClass = 'grade-b-plus'; gpaPoint = 2.0; }
          else if (totalScore >= 60) { grade = 'D'; gradeClass = 'grade-b-plus'; gpaPoint = 1.0; }
          else { grade = 'F'; gradeClass = 'grade-a'; gpaPoint = 0.0; }
          
          totalGPA += gpaPoint;
          
          const gradePill = row.cells[8].querySelector('.grade-pill');
          if (gradePill) {
            gradePill.textContent = grade;
            gradePill.className = `grade-pill ${gradeClass}`;
          }
          
          // Update Status Cell (col 9)
          const statusTag = row.cells[9].querySelector('.status-tag');
          if (statusTag) {
            if (grade === 'F') {
              statusTag.textContent = 'ធ្លាក់';
              statusTag.className = 'status-tag urgent';
            } else {
              statusTag.textContent = 'ជាប់';
              statusTag.className = 'status-tag passed';
            }
          }
        });
        
        // Update overall GPA
        const gpaValElement = document.querySelector('.gpa-val');
        const gpaGradeElement = document.querySelector('.gpa-grade');
        if (gpaValElement && gradebookRows.length > 0) {
          const finalGPA = totalGPA / gradebookRows.length;
          gpaValElement.textContent = finalGPA.toFixed(2);
          
          let overallGrade = 'F';
          if (finalGPA >= 3.7) overallGrade = 'A';
          else if (finalGPA >= 3.0) overallGrade = 'B';
          else if (finalGPA >= 2.0) overallGrade = 'C';
          else if (finalGPA >= 1.0) overallGrade = 'D';
          
          if (gpaGradeElement) gpaGradeElement.textContent = `និទ្ទេស ${overallGrade}`;
        }
        
        showToast('រក្សាទុកពិន្ទុជោគជ័យ', 'ទិន្នន័យពិន្ទុថ្មីត្រូវបានកត់ត្រាចូលប្រព័ន្ធ។');
      }
    });
  }

  // --- 11. Global Search Filter ---
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

  // --- 12. Admin Global Edit & Delete (Inject Buttons) ---
  if (isAdmin) {
    const editableSelectors = [
      '.timetable-card', 
      '.course-card', 
      '.assignment-item', 
      '.notice-card'
    ];
    
    editableSelectors.forEach(selector => {
      document.querySelectorAll(selector).forEach(el => {
        // Ensure relative positioning
        if (window.getComputedStyle(el).position === 'static') {
          el.style.position = 'relative';
        }
        
        const actionDiv = document.createElement('div');
        actionDiv.className = 'admin-item-actions admin-only';
        actionDiv.innerHTML = `
          <button class="admin-action-btn edit-btn" title="កែប្រែ (Edit)">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path></svg>
          </button>
          <button class="admin-action-btn delete-btn" title="លុប (Delete)">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path></svg>
          </button>
        `;
        
        // Edit functionality
        const editBtn = actionDiv.querySelector('.edit-btn');
        editBtn.addEventListener('click', (e) => {
          e.stopPropagation(); // prevent card click
          // Try to find the title element
          let titleEl = el.querySelector('h3') || el.querySelector('h4') || el.querySelector('.course-name');
          if (titleEl) {
            const newTitle = prompt('បញ្ចូលចំណងជើងថ្មី:', titleEl.textContent);
            if (newTitle !== null && newTitle.trim() !== '') {
              titleEl.textContent = newTitle.trim();
              showToast('ជោគជ័យ', 'ទិន្នន័យត្រូវបានកែប្រែ។');
            }
          } else {
            showToast('Admin', 'មិនអាចស្វែងរកចំណងជើងសម្រាប់កែប្រែបានទេ។');
          }
        });

        // Delete functionality
        const deleteBtn = actionDiv.querySelector('.delete-btn');
        deleteBtn.addEventListener('click', (e) => {
          e.stopPropagation();
          if (confirm('តើអ្នកពិតជាចង់លុបទិន្នន័យនេះមែនទេ? សកម្មភាពនេះមិនអាចត្រឡប់វិញបានទេ។')) {
            el.style.transition = 'all 0.3s ease';
            el.style.opacity = '0';
            el.style.transform = 'scale(0.95)';
            setTimeout(() => {
              el.remove();
              showToast('ជោគជ័យ', 'ទិន្នន័យត្រូវបានលុបចេញពីប្រព័ន្ធ។');
            }, 300);
          }
        });

        el.appendChild(actionDiv);
      });
    });

    // --- 13. Admin Course Material Upload ---
    let currentUploadCourse = '';
    const hiddenCourseUpload = document.createElement('input');
    hiddenCourseUpload.type = 'file';
    hiddenCourseUpload.style.display = 'none';
    document.body.appendChild(hiddenCourseUpload);
    
    hiddenCourseUpload.addEventListener('change', (e) => {
      if (e.target.files.length > 0) {
        const file = e.target.files[0];
        if (currentUploadCourse) {
          const storageKey = `duc-course-files-${currentUploadCourse}`;
          let files = JSON.parse(localStorage.getItem(storageKey) || '[]');
          files.push({ name: file.name, type: file.type });
          localStorage.setItem(storageKey, JSON.stringify(files));
        }
        showToast('ជោគជ័យ', 'ឯកសារមេរៀនត្រូវបានបញ្ជូលទៅក្នុងមុខវិជ្ជាដោយជោគជ័យ។');
        e.target.value = ''; // Reset
      }
    });

    document.querySelectorAll('.course-card').forEach(card => {
      const actionDiv = card.querySelector('.course-card-actions');
      if (actionDiv) {
        actionDiv.classList.add('has-admin-btn');
        
        let courseName = 'Unknown Course';
        const viewBtn = card.querySelector('button[onclick^="openCourseDetails"]');
        if (viewBtn) {
          const match = viewBtn.getAttribute('onclick').match(/'([^']+)'/);
          if (match) {
            courseName = match[1];
          }
        }
        
        const uploadBtn = document.createElement('button');
        uploadBtn.className = 'btn btn-outline btn-sm btn-full admin-only';
        uploadBtn.innerHTML = `
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="17 8 12 3 7 8"></polyline><line x1="12" y1="3" x2="12" y2="15"></line></svg>
          <span>បញ្ជូលឯកសារ</span>
        `;
        
        uploadBtn.addEventListener('click', (e) => {
          e.stopPropagation();
          currentUploadCourse = courseName;
          hiddenCourseUpload.click();
        });
        
        actionDiv.appendChild(uploadBtn);
      }
    });

  }
});
