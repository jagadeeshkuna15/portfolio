<template>
  <section id="projects" class="section-themable">
    <div class="container">
      <h2 class="text-center mb-5">Projects</h2>

      <div class="row">
        <!-- Shared Illustration -->
        <div class="col-lg-5 text-center mb-4 mb-lg-0">
          <img src="/img111.gif" alt="Project illustration" class="img-fluid" style="max-height: 320px;" />
        </div>

        <!-- All Projects List -->
        <div class="col-lg-7">
          <div v-for="(project, index) in projects" :key="index" class="mb-5">
            <h5 class="fw-bold mb-2" style="color: var(--accent)">{{ project.title }}</h5>
            <ul>
              <li v-for="(point, i) in project.details" :key="i">{{ point }}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Projects',
  data() {
    return {
      projects: [
        {
          title: 'Teams.cc',
          details: [
            'Real-time team collaboration platform with unlimited messaging, secure file sharing, channel management, in-app video calling, and productivity tools.',
            'Implemented real-time communication using Ably messaging service.',
            'Integrated features like Calendar, Conference, Appointment Scheduling, and Project Management tools.',
            'Utilized Vuex to store messages globally and manage application state.',
            'Worked in an agile environment focused on shipping features rapidly.',
            'Implemented real-time notifications and real-time message/file editing and removal.',
            'Developed features like audio and video recording for work updates, product demos, and instructions.'
          ]
        },
        {
          title: '500Box',
          details: [
            'Cloud-based file and folder management system accessible from any device.',
            'Enabled real-time editing and deletion of notifications and files.',
            'Implemented priority folders and starred folders for quick access.',
            'Added Trash Folder functionality to restore files, with auto-delete after 30 days.',
            'Supported uploading and creation of nested folders (tree structure view).'
          ]
        },
        {
          title: '500Mail',
          details: [
            'Enterprise email platform supporting collaboration across multiple mailboxes.',
            'Enabled setup of multiple domains for sending/receiving emails on one platform.',
            'Supported attachments from local drive and large file handling.',
            'Implemented multi-device setup with real-time syncing.',
            'Developed inbox filters, advanced email routing, and alias-based grouping.',
            'Created mailbox categories such as Drafts, Inbox, and Sent.',
            'Enabled access via default mail clients and added custom email signature support.'
          ]
        }
      ]
    }
  }
}
</script>

<style scoped>
.section-themable {
  background-color: var(--bg);
  color: var(--text);
  padding: 80px 0;
}

ul {
  padding-left: 1.2rem;
}

li {
  margin-bottom: 8px;
}

h2 {
  color: var(--text);
}
</style>
