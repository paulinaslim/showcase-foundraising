<div class="story panel">
    <div class="wrapper">
        <img class="image" src="{{ asset('images/inside.jpg') }}" alt="pink world">
    </div>
</div>
<section id="form"class="form panel ">
    <div class="intro-form">
        <span>Stay in touch</span>
        <h2>Let's connect and talk about new opportunities.</h2>
        <p> Our mission is to support emerging artists, foster artistic expression, and create lasting change in our
            community. Your involvement is crucial to our success, and there are many ways you can help us achieve
            our goals.</p>
    </div>
    <hr>

    <form action="/submit" method="POST" class="application-form">
        @csrf

        <div class="form-group data-name" data-group="">
            <div class="group-child">
                <label for="firstname">First Name:</label>
                <input type="text" id="firstname" name="firstname" required>
            </div>
            <div class="group-child">
                <label for="lastname">Last Name:</label>
                <input type="text" id="lastname" name="lastname" required>
            </div>
        </div>

        <div class="form-group" data-group="2">
            <label for="gender">Gender:</label>
            <select name="gender" id="gender" required>
                <option class="default-select" value="" disabled selected></option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="divers">Divers</option>
                <option value="prefer not to say">Prefer not to say</option>
            </select>
        </div>

        <div class="form-group">
            <label for="email">Email:</label>
            <input type="email" id="email" name="email" required>
        </div>

        <div class="form-group">
            <label for="message">Message:</label>
            <textarea name="message" id="message"></textarea>
        </div>

        <div class="alerts-wrapper">
            <div class="danger hidden">
                <p>Soemthing went wrong. Please review the form.</p>
            </div>

            <div class="success hidden">
                <p>Form submitted successfully!</p>
            </div>
        </div>
        <div class="submit-wrapper">
            <button id='submit-contact' type="submit" class="button">Submit</button>
        </div>
    </form>
    <hr>
</section>
