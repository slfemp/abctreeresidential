<template>
  <div class="header">
    <header>
      <div id="top-bar">
        <div class="container">
          <div class="row">
            <div class="col-md-9 col-xs-12">
              <div class="top-bar-info">
                <ul>
                  <li><i class="fas fa-mobile-alt"></i>
                  <span style="margin-right:20px">281.280.1100</span>
                  </li>
                  <li><i class="fas fa-envelope"></i>sales@abctree.com</li>
                </ul>
              </div>
            </div>
            <div class="col-xs-12 col-md-3 xs-display-none">
              <ul class="top-social-icon">
                <li>
                  <a href="https://www.facebook.com/abctrees"><i class="fab fa-facebook-f"></i></a>
                </li>
                <!--
                  <li>
                    <a href="#!"><i class="fab fa-twitter"></i></a>
                  </li>
                -->
                <li>
                  <a href="https://www.instagram.com/abctreeservices"><i class="fab fa-instagram"></i></a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div class="navbar-default">
        <!-- start top search -->
        <div class="top-search bg-theme">
          <div class="container">
            <form class="search-form" action="search.html" method="GET" accept-charset="utf-8">
              <div class="input-group">
                <span class="input-group-addon cursor-pointer">
                  <button
                    class="search-form_submit fas fa-search font-size18 text-white"
                    type="submit"
                  ></button>
                </span>
                <input
                  type="text"
                  class="search-form_input form-control"
                  name="s"
                  autocomplete="off"
                  placeholder="Type & hit enter..."
                />
                <span class="input-group-addon close-search"
                  ><i class="fas fa-times font-size18 line-height-28 margin-5px-top"></i
                ></span>
              </div>
            </form>
          </div>
        </div>
        <!-- end top search -->
        <div class="container">
          <div class="row align-items-center">
            <div class="col-12 col-lg-12">
              <div class="menu_area alt-font">
                <nav class="navbar navbar-expand-lg navbar-light no-padding">
                  <div class="navbar-header navbar-header-custom">
                    <!-- start logo -->
                    <a href="index.html" class="navbar-brand logodefault"
                      ><img id="logo" src="img/logo.png" alt="logo"
                    /></a>
                    <!-- end logo -->
                  </div>

                  <div class="navbar-toggler"></div>

                  <!-- menu area -->
                  <ul class="navbar-nav ml-auto" id="nav" >
                    <li>
                      <a href="/">Home</a>
                    </li>
                  <!--  <li>
                      <a href="#!">DropDown</a>
                      <ul>
                        <li>
                          <a href="#!">Dropside Menu</a>
                          <ul>
                            <li><a href="about.html">Option 1</a></li>
                            <li><a href="about-2.html">Option 2</a></li>
                            <li><a href="about-3.html">Option 3</a></li>
                            <li><a href="about-me.html">Option 4</a></li>
                          </ul>
                        </li>
                      </ul>
                    </li> -->
                    <li>
                      <a href="#!">Services</a>
                      <ul>
                        <li>
                             <router-link to="/treeremoval" tag="a">
                             Tree Removal</router-link>
                        </li>
                        <li>
                             <router-link to="/treetrimming" tag="a">
                             Tree Trimming</router-link>
                        </li>
                         <li>
                             <router-link to="/shrubpruning" tag="a">
                             Shrub Pruning</router-link>
                        </li>
                        <li>
                             <router-link to="/stormprepandcleanup" tag="a">
                             Storm Prep & Clean Up</router-link>
                        </li>
                            <li>
                             <router-link to="/landclearing" tag="a">
                             Land Clearing</router-link>
                        </li>
                      </ul>
                    </li>

                    <li>
                      <router-link to="/about" tag="a">About</router-link>
                    </li>

                    <li>
                      <router-link to="/contact" tag="a">Contact</router-link>
                    </li>

                   <!-- <li>
                      <a href="#!">Giant Menu</a>
                      <ul class="row megamenu">
                        <li class="col-lg-3 col-sm-12">
                          <span
                            class="margin-10px-bottom display-block sm-no-margin sm-padding-10px-tb
                            sm-padding-30px-lr font-size13 text-uppercase sub-title"
                            >Section 1</span
                          >
                          <ul>
                            <li><a href="portfolio-four-columns.html">Section 1 Option</a></li>
                            <li><a href="portfolio-three-columns.html">Section 1 Option</a></li>
                            <li><a href="portfolio-two-columns.html">Section 1 Option</a></li>
                          </ul>
                        </li>
                        <li class="col-lg-3 col-sm-12">
                          <span
                            class="margin-10px-bottom display-block sm-no-margin sm-padding-10px-tb
                            sm-padding-30px-lr font-size13 text-uppercase sub-title"
                            >Section 2</span
                          >
                         <ul>
                            <li><a href="portfolio-four-columns.html">Section 2 Option</a></li>
                            <li><a href="portfolio-three-columns.html">Section 2 Option</a></li>
                            <li><a href="portfolio-two-columns.html">Section 2 Option</a></li>
                          </ul>
                        </li>
                        <li class="col-lg-3 col-sm-12">
                          <span
                            class="margin-10px-bottom display-block sm-no-margin sm-padding-10px-tb
                            sm-padding-30px-lr font-size13 text-uppercase sub-title"
                            >Section 3</span
                          >
                          <ul>
                            <li><a href="portfolio-four-columns.html">Section 3 Option</a></li>
                            <li><a href="portfolio-three-columns.html">Section 3 Option</a></li>
                            <li><a href="portfolio-two-columns.html">Section 3 Option</a></li>
                          </ul>
                        </li>
                        <li class="col-lg-3 col-sm-12">
                          <span
                            class="margin-10px-bottom display-block sm-no-margin sm-padding-10px-tb
                            sm-padding-30px-lr font-size13 text-uppercase sub-title"
                            >Section 4</span
                          >
                          <ul>
                            <li><a href="portfolio-four-columns.html">Section 4 Option</a></li>
                            <li><a href="portfolio-three-columns.html">Section 4 Option</a></li>
                            <li><a href="portfolio-two-columns.html">Section 4 Option</a></li>
                          </ul>
                        </li>
                      </ul>
                    </li> -->
                  </ul>
                  <!-- end menu area -->

                  <!-- start attribute navigation -->
                 <!--  <div class="attr-nav sm-no-margin sm-margin-70px-right xs-margin-65px-right">
                    <ul>
                      <li class="search">
                        <a href="#!"><i class="fas fa-search"></i></a>
                      </li>
                    </ul>
                  </div> -->
                  <!-- end attribute navigation -->
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  </div>
</template>

<script>
export default {
  name: 'Header',
};
</script>
