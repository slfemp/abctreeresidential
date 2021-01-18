<template>
  <div class="container">

        <div class="row" style="margin-top:60px; margin-bottom:50px;">
          <h3> Call us at <a style="color:#9fbc2e" href="tel:+2812801100">(281)280-1100</a> <br>
          or use the form below to request a free consultation</h3>
        </div>

 <div class="row" style="margin-bottom:60px;">

      <div class="col-12">
      <div class="form-group">
        <label for="customername"><b>Full Name</b></label>
        <input type="text" style="max-width:600px"  class="form-control"
        id="customername" placeholder="Type in your full name">
      </div>
   </div>

   <div class="col-12">
      <div class="form-group">
        <label for="customerphone"><b>Phone Number</b></label>
        <input type="tel" style="max-width:600px"
        class="form-control" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
        id="customerphone" maxlength="15" placeholder="xxx-xxx-xxxx">
      </div>
    </div>

      <div class="col-12">
      <div class="form-group">
        <label for="customeremail"><b>Email address</b></label>
        <input type="email" style="max-width:600px" class="form-control"
        id="customeremail" placeholder="name@example.com">
      </div>
      </div>

      <div class="col-12">

          <div class="form-group">
            <label for="customerrequest"><b>Tell us more about your request</b></label>
            <textarea class="form-control" style="max-width:600px"
            id="customerrequest" rows="6"></textarea>
          </div>

          <div class="form-group">
            <button type="button" class="btn btn-success">Send Request</button>
          </div>

      </div>

   </div>

           <div class="row" style="margin-top:60px; margin-bottom:50px;">
          <h3>Location</h3>
        </div>

    <div class="row" style="margin-bottom:60px;">
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3470.9477928970114!2d-95.12590868453572!3d29.547014648852958!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x86409c8b6ab0a185%3A0x80c0586f7c6ac0c3!2s201%20Flint%20Ridge%20Rd%20Ste%20201%2C%20Webster%2C%20TX%2077598!5e0!3m2!1sen!2sus!4v1610748985461!5m2!1sen!2sus" width="100%" height="450" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Contact',
  components: {},
};
</script>
<style scoped></style>
