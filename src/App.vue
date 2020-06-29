<template>
    
        <div id="app" class=" mt-10 border border-info">

            <!----<div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div-->
            
                <Navbar></Navbar>
                <router-view />

            
            <Footer></Footer>
        </div>
</template>

<style scoped>

    @import url('https://fonts.googleapis.com/css?family=roboto:300,400,500,700&display=swap');

    section.preview {
        border: 1px solid #4285f4;
        padding: 15px;
        overflow: auto;
    }

    h3 {
        margin: 40px 0 0;
    }

    ul {
        list-style-type: none;
        padding: 0;
    }

    li {
        display: inline-block;
        margin: 0 10px;
    }

    a {
        color: #42b983;
    }

    .note {
        padding: 10px;
        border-left: 6px solid;
        -webkit-border-radius: 5px;
        border-radius: 5px;
    }

        .note strong {
            font-weight: 600;
        }

        .note p {
            font-weight: 500;
        }

        .note.note-primary {
            background-color: #dfeefd;
            border-color: #176ac4;
        }

        .note.note-secondary {
            background-color: #e2e3e5;
            border-color: #58595a;
        }

        .note.note-success {
            background-color: #e2f0e5;
            border-color: #49a75f;
        }

        .note.note-danger {
            background-color: #fae7e8;
            border-color: #e45460;
        }

        .note.note-warning {
            background-color: #faf4e0;
            border-color: #c2a442;
        }

        .note.note-info {
            background-color: #e4f2f5;
            border-color: #2492a5;
        }

        .note.note-light {
            background-color: #fefefe;
            border-color: #0f0f0f;
        }

</style>


