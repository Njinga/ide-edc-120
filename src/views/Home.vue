<template>
    <div class="home border border-light p-3 mb-5 rounded">
        <div class="text-center">
            <img src="../assets/uniswa.gif" class="img-fluid" alt="Responsive image">
        </div>
            <mdb-container fluid>
                <mdb-row class="text-center">
                    <h3 class="h3-responsive"> EDUCATIONAL</h3>
                    <h3 class="h3-responsive"> TECHNOLOGY AND SKILLS </h3>
                    <h4 class="h4-responsive"> (IDE- EDC 120)</h4>
                    <br />
                    <h3 class="h3-responsive"> K. Gathu & P.L. Biswalo </h3>
                </mdb-row>
                <br />
                <br />
                <br />
                <br />
                <mdb-row class="text-center">
                    <mdb-col col="12">
                        <h6 calss="h6-responsive"> UNIVERSITY OF SWAZILAND INSTITUTE OF DISTANCE EDUCATION </h6>
                    </mdb-col>
                </mdb-row>
            </mdb-container>
        </div>
</template>

<script>

    export default {
        name: 'Home'
    }
</script>

<style scoped>

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
    .img-fluid {
        max-width:100%;
        height:auto;
    }
    .b {
        margin-top:55px;
       

    }
</style>
