<template>
    <div>
        <b-navbar toggleable="lg" type="dark" variant="info">
            <b-navbar-brand to="/">Educational Technology and Skills </b-navbar-brand>

            <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

            <b-collapse id="nav-collapse" is-nav>

                <!-- Right aligned nav items -->
                <b-navbar-nav class="ml-auto">
                    <b-nav-item to="/">Home</b-nav-item>
                    <b-nav-item to="/overview">Overview</b-nav-item>
                    <b-nav-item-dropdown text="Unit 1" right>
                        <b-dropdown-item to="/unit11">1.1 Introduction</b-dropdown-item>
                        <b-dropdown-item to="/unit12">1.2 Key Concepts Applicable to Educational Technology and ICTs</b-dropdown-item>
                        <b-dropdown-item to="/unit13">1.3 Meaning and Scope of ICTs</b-dropdown-item>
                        <b-dropdown-item to="/unit14">1.4 Introduction to Social Media</b-dropdown-item>
                        <b-dropdown-item to="/unit15">1.5 Education Technology, Classroom Communication and Learning</b-dropdown-item>
                        <b-dropdown-item to="/unit16">1.6 The Changing Role of the Teacher in Classroom Communication</b-dropdown-item>
                        <b-dropdown-item to="/end-of-unit1">Summary, Assignment and References </b-dropdown-item>
                    </b-nav-item-dropdown>

                    <b-nav-item-dropdown text="Unit 2" right>
                        <b-dropdown-item to="/unit21">2.1 Introduction</b-dropdown-item>
                        <b-dropdown-item to="/unit22">2.2 The Role of Media in Teaching and Learning</b-dropdown-item>
                        <b-dropdown-item to="/unit23">2.3 Instructional Media Available for Teaching and Learning</b-dropdown-item>
                        <b-dropdown-item to="/unit24">2.4  Trends in Media Technologies</b-dropdown-item>
                        <b-dropdown-item to="/end-of-unit2">Summary, Assignment and References </b-dropdown-item>
                    </b-nav-item-dropdown>

                    <b-nav-item-dropdown text="Unit 3" right>
                        <b-dropdown-item to="/unit30">3.0 Introduction</b-dropdown-item>
                        <b-dropdown-item to="/unit31">3.1 Criteria for Selecting Media during instruction</b-dropdown-item>
                        <b-dropdown-item to="/unit32">3.2 Application of the Systems Approach to Media Selection and Use</b-dropdown-item>
                        <b-dropdown-item to="/unit33">3.3 The Media Selection Process</b-dropdown-item>
                        <b-dropdown-item to="/unit34">3.4 Media Selection Models</b-dropdown-item>
                        <b-dropdown-item to="/unit35">3.5 Locating Relevant Instructional Materials</b-dropdown-item>
                        <b-dropdown-item to="/end-of-unit3">Summary, Assignment and References </b-dropdown-item>
                    </b-nav-item-dropdown>

                    <b-nav-item-dropdown text="Unit 4" right>
                        <b-dropdown-item to="/unit41">4.1 Introduction</b-dropdown-item>
                        <b-dropdown-item to="/unit42">4.2 The Process for designing Instructional Media and Materials</b-dropdown-item>
                        <b-dropdown-item to="/unit43">4.3 How to Design, Plan and Produce Different Types of Instructional Materials</b-dropdown-item>
                        <b-dropdown-item to="/unit44">4.4 Utilizing Materials during Instruction</b-dropdown-item>
                        <b-dropdown-item to="/unit45">4.5 Utilizing Other Types of Instructional Materials during Instruction</b-dropdown-item>
                        <b-dropdown-item to="/end-of-unit4">Summary and References </b-dropdown-item>
                    </b-nav-item-dropdown>

                    <b-nav-item-dropdown text="Unit 5" right>
                        <b-dropdown-item to="/unit51">5.1 Introduction</b-dropdown-item>
                        <b-dropdown-item to="/unit52">5.2 What is media Integration?</b-dropdown-item>
                        <b-dropdown-item to="/unit53">5.3 Why Integrate Media into Instruction?</b-dropdown-item>
                        <b-dropdown-item to="/unit54">5.4 How to Integrate Media into the Instructional Process</b-dropdown-item>
                        <b-dropdown-item to="/end-of-unit5">Summary and References </b-dropdown-item>
                    </b-nav-item-dropdown>

                    <b-nav-item-dropdown text="Unit 6" right>
                        <b-dropdown-item to="/unit61">6.1 Introduction</b-dropdown-item>
                        <b-dropdown-item to="/unit62">6.2 The Concepts of Maintenance, Care and Storage of Instructional Media Equipment and Materials</b-dropdown-item>
                        <b-dropdown-item to="/unit63">6.3 How to Handle, Operate, Maintain and Store Media Equipment and Materials	</b-dropdown-item>
                        <b-dropdown-item to="/unit64">6.4 Storing equipment and Materials</b-dropdown-item>
                        <b-dropdown-item to="/end-of-unit6">Summary, Assessment and References </b-dropdown-item>
                    </b-nav-item-dropdown>

                    <b-nav-item to="/about">About Us</b-nav-item>
                    <b-nav-form>
                        <b-form-input size="sm" class="mr-sm-2" placeholder="Search"></b-form-input>
                        <b-button size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>
                    </b-nav-form>

                </b-navbar-nav>
            </b-collapse>
        </b-navbar>
    </div>
</template>
    <script>
        export default {
            name: "Navbar"
        };
    </script>

    <style scoped>
    </style>
