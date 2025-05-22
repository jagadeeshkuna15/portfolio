<template>
  <section id="projects" class="section-themable">
    <div class="container">
      <div class="section-header mb-5">
        <h2 class="section-title">Projects</h2>
        <hr class="section-divider" />
      </div>

      <!-- Project 1 -->
      <div class="project-card row align-items-center mb-5">
        <div class="col-md-6 mb-3 mb-md-0">
          <img src="/teams.png" alt="Project Illustration" class="img-fluid" />
        </div>
        <div class="col-md-6">
          <h5 class="fw-bold mb-2" style="color: var(--accent)">Teams.cc</h5>
          <ul>
            <li>Real-time team collaboration platform with unlimited messaging, secure file sharing, channel management, in-app video calling, and productivity tools.</li>
            <li>Implemented real-time communication using Ably messaging service.</li>
            <li>Integrated features like Calendar, Conference, Appointment Scheduling, and Project Management tools.</li>
            <li>Utilized Vuex to store messages globally and manage application state.</li>
            <li>Worked in an agile environment focused on shipping features rapidly.</li>
            <li>Implemented real-time notifications and real-time message/file editing and removal.</li>
            <li>Developed features like audio and video recording for work updates, product demos, and instructions.</li>
          </ul>
        </div>
      </div>

      <!-- Project 2 -->
      <div class="project-card row align-items-center mb-5">
        <div class="col-md-6 mb-3 mb-md-0">
          <img src="/500box.png" alt="Project Illustration" class="img-fluid" />
        </div>
        <div class="col-md-6">
          <h5 class="fw-bold mb-2" style="color: var(--accent)">500Box</h5>
          <ul>
            <li>Cloud-based file and folder management system accessible from any device.</li>
            <li>Enabled real-time editing and deletion of notifications and files.</li>
            <li>Implemented priority folders and starred folders for quick access.</li>
            <li>Added Trash Folder functionality to restore files, with auto-delete after 30 days.</li>
            <li>Supported uploading and creation of nested folders (tree structure view).</li>
          </ul>
        </div>
      </div>

      <!-- Project 3 -->
      <div class="project-card row align-items-center mb-3">
        <div class="col-md-6 mb-3 mb-md-0">
          <img src="/mail.webp" alt="Project Illustration" class="img-fluid" />
        </div>
        <div class="col-md-6">
          <h5 class="fw-bold mb-2" style="color: var(--accent)">500Mail</h5>
          <ul>
            <li>Enterprise email platform supporting collaboration across multiple mailboxes.</li>
            <li>Enabled setup of multiple domains for sending/receiving emails on one platform.</li>
            <li>Supported attachments from local drive and large file handling.</li>
            <li>Implemented multi-device setup with real-time syncing.</li>
            <li>Developed inbox filters, advanced email routing, and alias-based grouping.</li>
            <li>Created mailbox categories such as Drafts, Inbox, and Sent.</li>
            <li>Enabled access via default mail clients and added custom email signature support.</li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Projects'
}
</script>

<style scoped>
.section-themable {
  background-color: var(--bg);
  color: var(--text);
  padding: 80px 0;
}

.section-header {
  margin-bottom: 2rem;
  text-align: center;
}

.section-title {
  font-size: 1.75rem;
  font-weight: 700;
  color: var(--text);
  margin-bottom: 0.5rem;
}

.section-divider {
  border: none;
  border-top: 1px solid rgba(255, 255, 255, 0.15);
}

ul {
  padding-left: 1.2rem;
}

li {
  margin-bottom: 8px;
}

/* ✨ Card Hover Effect */
.project-card {
  background-color: var(--card-bg, #141622);
  padding: 30px;
  border-radius: 20px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  box-shadow: 0 0 0 transparent;
  border: 1px solid transparent;
}

.project-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.25);
  border-color: rgba(255, 255, 255, 0.05);
}
</style>
