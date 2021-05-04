const cityCorporationsData = [
    {}
];

function cityCorporationTemplate(cityCorporation) {
    return `
    <!-- city-corporation -->
    <div class="col-md-4">
        <div class="justify-content-between align-content-between team-card">
            <a href="cdn/city-corporation/bcc.png"><img src="cdn/city-corporation/bcc.png" alt="barishal city corporation" class="team-img"></a>
            <h2>Barishal City Corporation</h2>
        </div>
    </div>

    <!-- city-corporation -->
    <div class="col-md-4">
        <div class="justify-content-between align-content-between team-card">
            <a href="cdn/city-corporation/ccc.png"><img src="cdn/city-corporation/ccc.png" alt="chittagong city corporation" class="team-img"></a>
            <h2>Chittagong City Corporation</h2>
        </div>
    </div>

    <!-- city-corporation -->
    <div class="col-md-4">
        <div class="justify-content-between align-content-between team-card">
            <a href="cdn/city-corporation/ccc.jpg"><img src="cdn/city-corporation/ccc.jpg" alt="comilla city corporation" class="team-img"></a>
            <h2>Comilla City Corporation</h2>
        </div>
    </div>

    <!-- city-corporation -->
    <div class="col-md-4">
        <div class="justify-content-between align-content-between team-card">
            <a href="cdn/city-corporation/dncc.png"><img src="cdn/city-corporation/dncc.png" alt="dhaka north city corporation" class="team-img"></a>
            <h2>Dhaka North City Corporation</h2>
        </div>
    </div>

    <!-- city-corporation -->
    <div class="col-md-4">
        <div class="justify-content-between align-content-between team-card">
            <a href="cdn/city-corporation/dscc.png"><img src="cdn/city-corporation/dscc.png" alt="dhaka south city corporation" class="team-img"></a>
            <h2>Dhaka South City Corporation</h2>
        </div>
    </div>

    <!-- city-corporation -->
    <div class="col-md-4">
        <div class="justify-content-between align-content-between team-card">
            <a href="cdn/city-corporation/gcc.png"><img src="cdn/city-corporation/gcc.png" alt="gazipur city corporation" class="team-img"></a>
            <h2>Gazipur City Corporation</h2>
        </div>
    </div>

    <!-- city-corporation -->
    <div class="col-md-4">
        <div class="justify-content-between align-content-between team-card">
            <a href="cdn/city-corporation/ncc.png"><img src="cdn/city-corporation/ncc.png" alt="narayanganj city corporation" class="team-img"></a>
            <h2>Narayanganj City Corporation</h2>
        </div>
    </div>

    <!-- city-corporation -->
    <div class="col-md-4">
        <div class="justify-content-between align-content-between team-card">
            <a href="cdn/city-corporation/kcc.jpg"><img src="cdn/city-corporation/kcc.jpg" alt="khulna city corporation " class="team-img"></a>
            <h2>Khulna City Corporation </h2>
        </div>
    </div>

    <!-- city-corporation -->
    <div class="col-md-4">
        <div class="justify-content-between align-content-between team-card">
            <a href="cdn/city-corporation/mcc.png"><img src="cdn/city-corporation/mcc.png" alt="mymensingh city corporation" class="team-img"></a>
            <h2>Mymensingh City Corporation</h2>
        </div>
    </div>

    <!-- city-corporation -->
    <div class="col-md-4">
        <div class="justify-content-between align-content-between team-card">
            <a href="cdn/city-corporation/rcc.png"><img src="cdn/city-corporation/rcc.png" alt="rajshahi city corporation" class="team-img"></a>
            <h2>Rajshahi City Corporation</h2>
        </div>
    </div>

    <!-- city-corporation -->
    <div class="col-md-4">
        <div class="justify-content-between align-content-between team-card">
            <a href="cdn/city-corporation/rcc2.png"><img src="cdn/city-corporation/rcc2.png" alt="rangpur city corporation" class="team-img"></a>
            <h2>Rangpur City Corporation</h2>
        </div>
    </div>

    <!-- city-corporation -->
    <div class="col-md-4">
        <div class="justify-content-between align-content-between team-card">
            <a href="cdn/city-corporation/scc.png"><img src="cdn/city-corporation/scc.png" alt="sylhet city corporation" class="team-img"></a>
            <h2>Sylhet City Corporation</h2>
        </div>
    </div>
    `;
}


document.getElementById("cityCorporation").innerHTML = `
    ${cityCorporationsData.map(cityCorporationTemplate).join("")}
  `;

{/* <a href="tel:${cityCorporation.ourNumber}"><i class="fas fa-ellipsis-v"></i></a> */}
