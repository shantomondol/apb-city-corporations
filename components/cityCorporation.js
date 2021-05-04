const cityCorporationsData = [
    {}
];

function cityCorporationTemplate(cityCorporation) {
    return `
    <!-- city-corporation -->
    <div class="col-md-4">
        <div class="justify-content-between align-content-between city-corporation">
            <a href="cdn/city-corporation/bcc.png"><img src="cdn/city-corporation/bcc.png" alt="বরিশাল সিটি কর্পোরেশন" class="city-corporation-img"></a>
            <h2>বরিশাল সিটি কর্পোরেশন</h2>
        </div>
    </div>

    <!-- city-corporation -->
    <div class="col-md-4">
        <div class="justify-content-between align-content-between city-corporation">
            <a href="cdn/city-corporation/ccc.png"><img src="cdn/city-corporation/ccc.png" alt="চট্টগ্রাম সিটি কর্পোরেশন" class="city-corporation-img"></a>
            <h2>চট্টগ্রাম সিটি কর্পোরেশন</h2>
        </div>
    </div>

    <!-- city-corporation -->
    <div class="col-md-4">
        <div class="justify-content-between align-content-between city-corporation">
            <a href="cdn/city-corporation/ccc.jpg"><img src="cdn/city-corporation/ccc.jpg" alt="কুমিল্লা সিটি কর্পোরেশন" class="city-corporation-img"></a>
            <h2>কুমিল্লা সিটি কর্পোরেশন</h2>
        </div>
    </div>

    <!-- city-corporation -->
    <div class="col-md-4">
        <div class="justify-content-between align-content-between city-corporation">
            <a href="cdn/city-corporation/dncc.png"><img src="cdn/city-corporation/dncc.png" alt="ঢাকা-উত্তর সিটি কর্পোরেশন" class="city-corporation-img"></a>
            <h2>ঢাকা-উত্তর সিটি কর্পোরেশন</h2>
        </div>
    </div>

    <!-- city-corporation -->
    <div class="col-md-4">
        <div class="justify-content-between align-content-between city-corporation">
            <a href="cdn/city-corporation/dscc.png"><img src="cdn/city-corporation/dscc.png" alt="ঢাকা-দক্ষিণ সিটি কর্পোরেশন" class="city-corporation-img"></a>
            <h2>ঢাকা-দক্ষিণ সিটি কর্পোরেশন</h2>
        </div>
    </div>

    <!-- city-corporation -->
    <div class="col-md-4">
        <div class="justify-content-between align-content-between city-corporation">
            <a href="cdn/city-corporation/gcc.png"><img src="cdn/city-corporation/gcc.png" alt="গাজীপুর সিটি কর্পোরেশন" class="city-corporation-img"></a>
            <h2>গাজীপুর সিটি কর্পোরেশন</h2>
        </div>
    </div>

    <!-- city-corporation -->
    <div class="col-md-4">
        <div class="justify-content-between align-content-between city-corporation">
            <a href="cdn/city-corporation/ncc.png"><img src="cdn/city-corporation/ncc.png" alt="নারায়ণগঞ্জ সিটি কর্পোরেশন" class="city-corporation-img"></a>
            <h2>নারায়ণগঞ্জ সিটি কর্পোরেশন</h2>
        </div>
    </div>

    <!-- city-corporation -->
    <div class="col-md-4">
        <div class="justify-content-between align-content-between city-corporation">
            <a href="cdn/city-corporation/kcc.jpg"><img src="cdn/city-corporation/kcc.jpg" alt="খুলনা সিটি কর্পোরেশন" class="city-corporation-img"></a>
            <h2>খুলনা সিটি কর্পোরেশন</h2>
        </div>
    </div>

    <!-- city-corporation -->
    <div class="col-md-4">
        <div class="justify-content-between align-content-between city-corporation">
            <a href="cdn/city-corporation/mcc.png"><img src="cdn/city-corporation/mcc.png" alt="ময়মনসিংহ সিটি কর্পোরেশন" class="city-corporation-img"></a>
            <h2>ময়মনসিংহ সিটি কর্পোরেশন</h2>
        </div>
    </div>

    <!-- city-corporation -->
    <div class="col-md-4">
        <div class="justify-content-between align-content-between city-corporation">
            <a href="cdn/city-corporation/rcc.png"><img src="cdn/city-corporation/rcc.png" alt="রাজশাহী সিটি কর্পোরেশন" class="city-corporation-img"></a>
            <h2>রাজশাহী সিটি কর্পোরেশন</h2>
        </div>
    </div>

    <!-- city-corporation -->
    <div class="col-md-4">
        <div class="justify-content-between align-content-between city-corporation">
            <a href="cdn/city-corporation/rcc2.png"><img src="cdn/city-corporation/rcc2.png" alt="রংপুর সিটি কর্পোরেশন" class="city-corporation-img"></a>
            <h2>রংপুর সিটি কর্পোরেশন</h2>
        </div>
    </div>

    <!-- city-corporation -->
    <div class="col-md-4">
        <div class="justify-content-between align-content-between city-corporation">
            <a href="cdn/city-corporation/scc.png"><img src="cdn/city-corporation/scc.png" alt="সিলেট সিটি কর্পোরেশন" class="city-corporation-img"></a>
            <h2>সিলেট সিটি কর্পোরেশন</h2>
        </div>
    </div>
    `;
}


document.getElementById("cityCorporation").innerHTML = `
    ${cityCorporationsData.map(cityCorporationTemplate).join("")}
  `;

{/* <a href="tel:${cityCorporation.ourNumber}"><i class="fas fa-ellipsis-v"></i></a> */}
