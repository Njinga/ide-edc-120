<template>
    <!-- Footer -->
    <mdb-footer class=" bg-info pt-1 mt-1">

        <div class="footer-copyright text-center py-3">
            <mdb-container fluid>
                <div class="row">
                    <div class="col">
                        <a href="https://learn.uniswa.sz/login/index.php"> Moodle</a>
                    </div>
                    <div class="col">
                        &copy;2020 Copyright:<a href="http://www.ide.uneswa.ac.sz/">IDE</a>
                    </div>
                    <div class="col">
                        <a href="http://www.library.uneswa.ac.sz/pastpapers/curmain.html">Past Papers</a>
                    </div>
                </div>
            </mdb-container>
        </div>
    </mdb-footer>
    <!-- Footer -->
</template>

<script>
    import { mdbFooter, mdbContainer } from 'mdbvue';
    export default {
        name: 'Footer',
        components: {
            mdbFooter,
            mdbContainer

        }
    }


</script>