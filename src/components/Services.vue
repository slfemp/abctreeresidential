<template>
  <div class="services">
    <!-- start blog section -->
    <section>
      <div class="container">
        <div class="row">
          <div class="col-lg-6 margin-30px-bottom sm-margin-20px-bottom">
            <div class="case-block">
              <div class="row">
                <div class="col-md-6 col-xs-12">
                  <img src="img/treeremoval.jpg" alt="case" />
                </div>
                <div class="col-md-6 col-xs-12">
                  <div class="case-block-inner">
                    <h4>Tree Removal</h4>
                    <p>
                     An unhealthy tree is a serious safety hazard to people
                     and property. Have your trees assessed by our professionals
                     to avoid potential risk of injury, damage and liability!
                    </p>
                      <router-link to="/treeremoval" tag="a">learn more</router-link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-6 margin-30px-bottom sm-margin-20px-bottom">
            <div class="case-block">
              <div class="row">
                <div class="col-md-6 col-xs-12">
                  <img src="img/treetrimming.jpg" alt="case" />
                </div>
                <div class="col-md-6 col-xs-12">
                  <div class="case-block-inner">
                    <h4>Tree Trimming</h4>
                    <p>
                      Trimming helps a tree maintain its shape, aesthetics,
                      and health. It is also safer and may protect your property
                      from future damage from falling branches.
                    </p>
                     <router-link to="/treetrimming" tag="a">learn more</router-link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-6 margin-30px-bottom sm-margin-20px-bottom">
            <div class="case-block">
              <div class="row">
                <div class="col-md-6 col-xs-12">
                  <img src="img/shrubpruning.jpg" alt="case" />
                </div>
                <div class="col-md-6 col-xs-12">
                  <div class="case-block-inner">
                    <h4>Shrub Pruning</h4>
                    <p>Pruning is an important part of every landscaping program.
                      Improve the look of your lawn or property with well manicured
                      ornamental trees and shrubs.
                    </p>
                       <router-link to="/shrubpruning" tag="a">learn more</router-link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-6 margin-30px-bottom sm-margin-20px-bottom">
            <div class="case-block">
              <div class="row">
                <div class="col-md-6 col-xs-12">
                  <img src="img/stormprepandcleanup.jpg" alt="case" />
                </div>
                <div class="col-md-6 col-xs-12">
                  <div class="case-block-inner">
                    <h4>Storm Preparation <br> & Cleanup</h4>
                    <p>
                      Ia a large branch hanging over your house?
                      Don't wait until the storm is on the way. <br> Too Late?
                      We can remove fallen trees and branches from your property.
                    </p>
                      <router-link to="/stromprepandcleanup" tag="a">learn more</router-link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-6 sm-margin-20px-bottom">
            <div class="case-block">
              <div class="row">
                <div class="col-md-6 col-xs-12">
                  <img src="img/landclearing.jpg" alt="case" />
                </div>
                <div class="col-md-6 col-xs-12">
                  <div class="case-block-inner">
                    <h4>Mulching & Underbrush Removal</h4>
                    <p>
                      We understand that clearing your property
                      of trees, stumps, shrubbery and vines is more than cutting
                      down trees, and removing all plants.
                    </p>
                    <router-link to="/landclearing" tag="a">learn more</router-link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-6">
            <div class="case-block">
              <div class="row">
                <div class="col-md-6 col-xs-12">
                  <img src="img/about.jpg" alt="case" />
                </div>
                <div class="col-md-6 col-xs-12">
                  <div class="case-block-inner">
                    <h4>About Us</h4>
                    <p>
                      The about us text or maybe we add another service
                    </p>
                    <router-link to="/about us" tag="a">learn more</router-link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- end blog section -->
  </div>
</template>

<script>
export default {
  name: 'Services',
};
</script>
