<template>
    <!-- Footer -->
    <mdb-footer  class=" bg-info text-white font-small pt-1 mt-1">

        <div class="footer-copyright text-center py-3">
            <mdb-container fluid>
                &copy;Institute of Distance Education, 2014.
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