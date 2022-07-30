
export default function contactPage() {
    const main = document.querySelector(".main");
    main.innerHTML = `
<div class="content">

<div style="display:flex;justify-content:center;align-items: center;margin-top: 0;">
    <h1>Connect with us </h1><img src="../src/call.png" class="contact-img" alt="caller">
</div>
<div class="email"> Email - EatyDeez@gmail.com</div>
<div class="call">Phone - 11-12134343</div>
<iframe
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26401.196074761923!2d-118.52812612555374!3d34.19365620897365!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c299ef3b8308c3%3A0xe4bece2917a2e711!2sMillie&#39;s%20Restaurant%20%26%20Bakery!5e0!3m2!1sen!2sin!4v1659003558607!5m2!1sen!2sin"
    width="600" height="450" style="border:3px solid black; width: 100%;" allowfullscreen="" loading="lazy"
    referrerpolicy="no-referrer-when-downgrade"></iframe>
    </div>`
}