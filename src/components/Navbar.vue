<template>
    <mdb-navbar class="fixed-top mt-0 mb-10 meme" expand="large" dark color="info">
        <mdb-navbar-brand to="/">
            IDE-EDC 120
        </mdb-navbar-brand>
        <mdb-navbar-toggler>
            <mdb-navbar-nav left>
                <mdb-nav-item class="text-left" to="/" active>Home</mdb-nav-item>
                <mdb-nav-item class="text-left" to="/overview">Overview</mdb-nav-item>
                <mdb-dropdown tag="li" class="nav-item text-left">
                    <mdb-dropdown-toggle tag="a" navLink color="info" slot="toggle" waves-fixed>Unit 1</mdb-dropdown-toggle>
                    <mdb-dropdown-menu>
                        <mdb-dropdown-item to="/unit11">1.1 Introduction </mdb-dropdown-item>
                        <mdb-dropdown-item to="/unit12">1.2 Key Concepts</mdb-dropdown-item>
                        <mdb-dropdown-item to="/unit13">1.3 Meaning and Scope of ICTs</mdb-dropdown-item>
                        <mdb-dropdown-item to="/unit14">1.4 Introduction to Social Media</mdb-dropdown-item>
                        <mdb-dropdown-item to="/unit15">1.5 Educ Tech, Class Commu and...</mdb-dropdown-item>
                        <mdb-dropdown-item to="/unit16">1.6 The Changing Role</mdb-dropdown-item>
                        <mdb-dropdown-item to="/end-of-unit1">Summary, Assignment and References </mdb-dropdown-item>
                    </mdb-dropdown-menu>
                </mdb-dropdown>

                <mdb-dropdown tag="li" class="nav-item text-left">
                    <mdb-dropdown-toggle tag="a" navLink color="info" slot="toggle" waves-fixed>Unit 2</mdb-dropdown-toggle>
                    <mdb-dropdown-menu>
                        <mdb-dropdown-item to="/unit21">2.1 Introduction</mdb-dropdown-item>
                        <mdb-dropdown-item to="/unit22">2.2 The Role of Media in T and L</mdb-dropdown-item>
                        <mdb-dropdown-item to="/unit23">2.3 Instructional Media available...</mdb-dropdown-item>
                        <mdb-dropdown-item to="/unit24">2.4  Trends in Media Technologies</mdb-dropdown-item>
                        <mdb-dropdown-item to="/end-of-unit2">Summary, Assignment and References </mdb-dropdown-item>
                    </mdb-dropdown-menu>
                </mdb-dropdown>

                <mdb-dropdown tag="li" class="nav-item text-left">
                    <mdb-dropdown-toggle tag="a" navLink color="info" slot="toggle" waves-fixed>Unit 3</mdb-dropdown-toggle>
                    <mdb-dropdown-menu>
                        <mdb-dropdown-item to="/unit30">3.0 Introduction</mdb-dropdown-item>
                        <mdb-dropdown-item to="/unit31">3.1 Criteria for Selecting Media</mdb-dropdown-item>
                        <mdb-dropdown-item to="/unit32">3.2 Application of the System... </mdb-dropdown-item>
                        <mdb-dropdown-item to="/unit33">3.3 The Media Selection Process</mdb-dropdown-item>
                        <mdb-dropdown-item to="/unit34">3.4 Media Selection Models</mdb-dropdown-item>
                        <mdb-dropdown-item to="/unit35">3.5 Locating Relevant Instructional ...</mdb-dropdown-item>
                        <mdb-dropdown-item to="/end-of-unit3">Summary, Assignment and References</mdb-dropdown-item>
                    </mdb-dropdown-menu>
                </mdb-dropdown>

                <mdb-dropdown tag="li" class="nav-item text-left">
                    <mdb-dropdown-toggle tag="a" navLink color="info" slot="toggle" waves-fixed>Unit 4</mdb-dropdown-toggle>
                    <mdb-dropdown-menu>
                        <mdb-dropdown-item to="/unit41">4.1 Introduction</mdb-dropdown-item>
                        <mdb-dropdown-item to="/unit42">4.2 The Process for Designing ...</mdb-dropdown-item>
                        <mdb-dropdown-item to="/unit43">4.3 How to Design, Plan and ...</mdb-dropdown-item>
                        <mdb-dropdown-item to="/unit44">4.4 Utilizing Materials ...</mdb-dropdown-item>
                        <mdb-dropdown-item to="/unit45">4.5 Utilizing other Types of ...</mdb-dropdown-item>
                        <mdb-dropdown-item to="/end-of-unit4">Summary and References </mdb-dropdown-item>
                    </mdb-dropdown-menu>
                </mdb-dropdown>

                <mdb-dropdown tag="li" class="nav-item text-left">
                    <mdb-dropdown-toggle tag="a" navLink color="info" slot="toggle" waves-fixed>Unit 5</mdb-dropdown-toggle>
                    <mdb-dropdown-menu>
                        <mdb-dropdown-item to="/unit51">5.1 Introduction</mdb-dropdown-item>
                        <mdb-dropdown-item to="/unit52">5.2  What is media Integration?</mdb-dropdown-item>
                        <mdb-dropdown-item to="/unit53">5.3 Why Integrate Media...?</mdb-dropdown-item>
                        <mdb-dropdown-item to="/unit54">5.4 How to Integrate Media...</mdb-dropdown-item>
                        <mdb-dropdown-item to="/end-of-unit5">Summary and References</mdb-dropdown-item>
                    </mdb-dropdown-menu>
                </mdb-dropdown>

                <mdb-dropdown tag="li" class="nav-item text-left">
                    <mdb-dropdown-toggle tag="a" navLink color="info" slot="toggle" waves-fixed>Unit 6</mdb-dropdown-toggle>
                    <mdb-dropdown-menu>
                        <mdb-dropdown-item to="/unit61">6.1 Introduction</mdb-dropdown-item>
                        <mdb-dropdown-item to="/unit62">6.2 The Concepts of Maintenance, Care..</mdb-dropdown-item>
                        <mdb-dropdown-item to="/unit63">6.3 How to Handle, Operate, Maintain...</mdb-dropdown-item>
                        <mdb-dropdown-item to="/unit64">6.4 Storing equipment and Materials</mdb-dropdown-item>
                        <mdb-dropdown-item to="/end-of-unit6">Summary, Assessment and References </mdb-dropdown-item>
                    </mdb-dropdown-menu>
                </mdb-dropdown>

            </mdb-navbar-nav>
            <form class="form-inline my-1 text-right">
                <div class="md-form form-sm mr-sm-2 my-0">
                    <input class="form-control form-control-sm mr-sm-2 mb-0" type="text" placeholder="Search"
                           aria-label="Search">
                </div>
                <button class="btn btn-outline-white btn-sm my-0" type="submit">Search</button>
            </form>
        </mdb-navbar-toggler>
    </mdb-navbar>
</template>

<script>
    import { mdbDropdown, mdbDropdownToggle, mdbDropdownMenu, mdbDropdownItem, /*mdbContainer,*/ mdbNavbar, mdbNavbarBrand, mdbNavbarToggler, mdbNavbarNav, mdbNavItem } from 'mdbvue';
    export default {
        name: 'Navbar',
        components: {
            mdbNavbar,
            mdbNavbarBrand,
            mdbNavbarToggler,
            mdbNavbarNav,
            mdbNavItem,
            //mdbContainer,
            mdbDropdown,
            mdbDropdownToggle,
            mdbDropdownMenu,
            mdbDropdownItem
        }
    }
</script>
<style >
</style>