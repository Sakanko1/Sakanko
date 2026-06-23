// ==========================================
// ملف data.js - سكنكو (معدل)
// ==========================================

// --- الدالة الذكية لتنظيف الروابط (تم إضافتها هنا) ---
function getCleanUrl(url) {
    if (typeof url !== 'string') return url;
    if (url.includes('<img')) {
        const match = url.match(/src=["'](.*?)["']/);
        return match ? match[1] : url;
    }
    return url;
}
// ---------------------------------------------------

function closeModal() {
    document.getElementById("details-modal").classList.remove("active");
}

const roomsData = [
{
    id: "SK-101",
    title: "فيلا 319 -  السوق القديم (أمام مسجد الصحابة)",
    city: "السوق القديم",
    type: "شباب",
    price: "1350 جنيه / شهرياً",
    priceDetails: { "غرفة دابل": "1500 جنيه", "غرفة تريبل": "1350 جنيه" , "غرفة سنجل": "2000 جنيه" },
    roomsCount: 3, 
    totalBeds: 6,
    bedsAvailable: 6,
    images: [
"https://i.ibb.co/LzKfnXS1/IMG-20260608-WA0078.jpg",
"https://i.ibb.co/tpcwcwnb/IMG-20260608-WA0070-1.jpg",
"https://i.ibb.co/sd6XnKs4/IMG-20260608-WA0077.jpg",
"https://i.ibb.co/r2wZFCLh/IMG-20260608-WA0072-1.jpg",
"https://i.ibb.co/7xWkKD3V/IMG-20260608-WA0076.jpg",
"https://i.ibb.co/jvjtbBys/IMG-20260608-WA0075.jpg",
"https://i.ibb.co/Fknf4j1y/IMG-20260608-WA0074.jpg",
"https://i.ibb.co/WRRSmTd/IMG-20260608-WA0073.jpg",
"https://i.ibb.co/r2wZFCLh/IMG-20260608-WA0072-1.jpg",
"https://i.ibb.co/ZzrpFLLr/IMG-20260608-WA0071.jpg",
"https://i.ibb.co/tpcwcwnb/IMG-20260608-WA0070-1.jpg",
"https://i.ibb.co/cc7MSj6c/IMG-20260608-WA0069.jpg",
"https://i.ibb.co/BK6tfXKC/IMG-20260608-WA0068.jpg",
"https://i.ibb.co/KpWfKX9v/IMG-20260608-WA0067.jpg",
    ],
    desc: "فيلا 319 بالمرحلة العاجلة، موقع استراتيجي أمام مسجد الصحابة وقريبة من المدرسة الثانوية. السكن يوفر خيارات متنوعة للغرف (غرف تربل، غرف دبل، وغرف سنجل) لتناسب كافة الاحتياجات. نرحب بالمعاينة على الطبيعة لتقدير مستوى السكن.",
    features: ["موقع متميز", "خيارات غرف متعددة", "قرب الخدمات", "مساحة واسعة"]
},
  {
      id: "SK-102",
    title: "المرحلة الخامسة",
    city: "المرحلة الخامسة",
    type: "شباب",
    price: "1200 جنيه / شهرياً للسرير",
    roomsCount: 2, 
    totalBeds: 4,
    bedsAvailable: 4,
    images: [
    "https://i.ibb.co/fGkP1HS0/IMG-20260609-WA0062-1.jpg" ,
"https://i.ibb.co/mFrY275x/IMG-20260609-WA0061-1.jpg" ,
"https://i.ibb.co/ynZ1tZ39/IMG-20260609-WA0060-1.jpg" ,
"https://i.ibb.co/vvx3C2hG/IMG-20260609-WA0059-1.jpg" ,
"https://i.ibb.co/W4JVDH26/IMG-20260609-WA0058-1.jpg" ,
"https://i.ibb.co/ycpbTrSN/IMG-20260609-WA0057-1.jpg" ,
    ],
    desc: "سكن مخصص للشباب في منطقة ابني بيتك الخامسة، يتميز بموقع استراتيجي قريب جداً من الموقف والسوق لسهولة التنقل وتلبية الاحتياجات اليومية. السكن يوفر 4 أسرّة مريحة.",
    features: ["قرب الموقف", "قرب السوق", "موقع حيوي", "سكن مخصص للشباب"]
},
    {
    id: "SK-103",
    title: " شمال الجامعة (عند سوبر ماركت أبو دياب)",
    city: "شمال الجامعة",
    type: "شباب",
    price: "1200 جنيه / شهرياً",
     priceDetails: { "غرفة دابل": "1300 جنيه", "غرفة تريبل": "1200 جنيه" , },
    roomsCount: 3, 
    totalBeds: 7,
    bedsAvailable: 7,
    images: [
   "https://i.ibb.co/7JjGNnyF/IMG-20260613-WA0144.jpg", 
"https://i.ibb.co/6JZ98qmj/IMG-20260613-WA0143.jpg",
"https://i.ibb.co/R43YVWfx/IMG-20260613-WA0142.jpg",
"https://i.ibb.co/35BwQd5C/IMG-20260613-WA0141.jpg",
"https://i.ibb.co/gMY9QLVN/IMG-20260613-WA0139.jpg",
"https://i.ibb.co/nsdL12Kj/IMG-20260613-WA0140.jpg",
"https://i.ibb.co/SX64WkDx/IMG-20260613-WA0138.jpg",             "https://i.ibb.co/RG4Q5kfv/IMG-20260613-WA0134.jpg",
"https://i.ibb.co/yn0zpNvc/IMG-20260613-WA0137.jpg",
"https://i.ibb.co/1fSDYvFB/IMG-20260613-WA0136.jpg" ,
"https://i.ibb.co/fVhBt9GY/IMG-20260613-WA0135.jpg",
"https://i.ibb.co/zT1CPQGW/IMG-20260613-WA0133.jpg",
"https://i.ibb.co/KxbKWM4x/IMG-20260613-WA0132.jpg",
"https://i.ibb.co/Wvs86tPn/IMG-20260613-WA0131.jpg",
    ],
    desc: "سكن مميز في شمال الجامعة بجوار سوبر ماركت أبو دياب ويوجد كافيه بالأسفل. السكن (دور أول علوي) ويحتوي على غرفتين دابل (سعر السرير 1300) وغرفة ترابل (سعر السرير 1200).",
    features: ["موقع حيوي", "كافيه ملحق بالبيت", "قرب الخدمات", "خيارات غرف متعددة"]
},
   {
    id: "SK-104",
    title: "المرحلة الرابعة  ",
    city: "المرحلة الرابعة",
    type: "شباب",
    price: "1000 جنيه / شهرياً للسرير",
    roomsCount: 2, 
    totalBeds: 5,
    bedsAvailable: 0,
    images: [
   "https://i.ibb.co/5hj1ZKWF/IMG-20260612-WA0371.jpg",
"https://i.ibb.co/Ng5rymTL/IMG-20260607-WA0039.jpg",
"https://i.ibb.co/xqWXfsrT/IMG-20260607-WA0045.jpg",
"https://i.ibb.co/PvWHWg0B/IMG-20260607-WA0049.jpg",
"https://i.ibb.co/twbCxwVp/IMG-20260607-WA0048.jpg",
"https://i.ibb.co/KxJRQ83p/IMG-20260607-WA0047.jpg",
"https://i.ibb.co/PKMXqQ5/IMG-20260607-WA0052.jpg",
"https://i.ibb.co/60rxRr3J/IMG-20260607-WA0051.jpg",
"https://i.ibb.co/1Ygw7MsZ/IMG-20260607-WA0055.jpg",
    ],
    desc: "شقة مميزة في المرحلة الرابعة بجوار الخدمات والجامع مباشرة، وموقع استراتيجي خلف الجامعة. توفر إقامة مريحة للشباب بسعر اقتصادي.",
    features: ["موقع استراتيجي", "بجوار الجامع", "قرب الجامعة", "خدمات متكاملة"]
},
   {
    id: "SK-105",
    title: "المرحلة الرابعة - بجوار الجامعة الأهلية",
    city: "المرحلة الرابعة",
    type: "شباب",
    price: "1350 جنيه / شهرياً",
    roomsCount: 2, 
    totalBeds: 5,
    bedsAvailable: 5,
    images: [
  "https://i.ibb.co/NnF9MCLd/IMG-20260606-WA0088-1.jpg",
"https://i.ibb.co/677bx881/IMG-20260606-WA0087-1.jpg",
"https://i.ibb.co/gLsfX2qm/IMG-20260606-WA0086-1.jpg",
"https://i.ibb.co/jkbjqpcV/IMG-20260606-WA0084-1.jpg",                                                                                                                                                                                                                                             "https://i.ibb.co/YFhc7wHd/IMG-20260606-WA0082-1.jpg",
"https://i.ibb.co/4RmVYbzC/IMG-20260606-WA0081-1.jpg",
"https://i.ibb.co/LDXWNhxT/IMG-20260606-WA0079-1.jpg",
"https://i.ibb.co/nsdPVHhg/IMG-20260606-WA0078-1.jpg",
    ],
    desc: "شقة في موقع استراتيجي بالمرحلة الرابعة على الشارع الرئيسي، بجوار الجامعة الأهلية وقسم الشرطة ومديرية الأمن مباشرة. خدمات متكاملة خلف البيت، ومواصلات متوفرة أمام البيت مباشرة. السعر للعام الجديد.",
    features: ["موقع مميز", "قرب المواصلات", "بجوار الجامعة", "خدمات متوفرة"]
},
  {
    id: "SK-106",
    title: "السوق القديم - أمام كافتريا قصر الشوق",
    city: "السوق القديم",
    type: "شباب",
    price: "1750 جنيه / شهرياً",
    roomsCount: 2, 
    totalBeds: 4,
    bedsAvailable: 4,
    images: [
        "https://i.ibb.co/99pwPfnG/IMG-20260607-WA0155-2.jpg",
        "https://i.ibb.co/fZ5CR0m/IMG-20260607-WA0154-2.jpg",
        "https://i.ibb.co/VcQfXCFF/IMG-20260607-WA0152-2.jpg",
        "https://i.ibb.co/9HSTMdsj/IMG-20260607-WA0153-2.jpg",
    ],
    desc: "سكن شباب بموقع متميز في 17 ط، أمام كافتريا قصر الشوق مباشرة. السكن مجهز بتكييفين (حالة زيرو) لضمان أعلى درجات الراحة. مثالي للطلاب الباحثين عن الهدوء والخدمات المتكاملة.",
    features: ["تكييفين بحالة الزيرو", "موقع حيوي", "قرب الخدمات", "مساحة مريحة"]
},
   {
    id: "SK-108",
    title: "سكن شباب - شمال الجامعة (عند سوبر ماركت أبو دياب)",
    city: "شمال الجامعة",
    type: "شباب",
    price: "1200 - 1300 جنيه / شهرياً",
    roomsCount: 3, 
    totalBeds: 7,
    bedsAvailable: 7,
    images: [
        "https://i.ibb.co/BH7rptyv/image.jpg",
        "https://i.ibb.co/bMhdt187/image.jpg",
        "https://i.ibb.co/VWVgMXYP/image.jpg",
        "https://i.ibb.co/DDPrH9Vj/image.jpg",
        "https://i.ibb.co/kg6yrkB2/image.jpg",
        "https://i.ibb.co/39K2mxjG/image.jpg",
        "https://i.ibb.co/7xdmMzjN/image.jpg",
        "https://i.ibb.co/DHjSXRc5/image.jpg",
        "https://i.ibb.co/cXk0YNM5/image.jpg",
        "https://i.ibb.co/tTxNSPdk/image.jpg",
        "https://i.ibb.co/pjrRGBzt/image.jpg",
        "https://i.ibb.co/Fk1J3MdG/image.jpg",
        "https://i.ibb.co/tpMPs3sq/image.jpg",
        "https://i.ibb.co/zhTtMv7J/image.jpg"
    ],
    desc: "سكن مميز في شمال الجامعة بجوار سوبر ماركت أبو دياب ويوجد كافيه بالأسفل. السكن يتكون من دورين (أرضي وأول علوي) ويحتوي على غرفتين دابل (سعر السرير 1300) وغرفة ترابل (سعر السرير 1200).",
    features: ["موقع حيوي", "كافيه ملحق بالبيت", "قرب الخدمات", "خيارات غرف متعددة"]
},

    {
        id: "SK-113",
        title: "فيلا سكن طالبات - شمال الجامعة (مستوى فندقي)",
        city: "شمال الجامعة",
        type: "بنات",
        price: "1300 جنيه / شهرياً",
        priceDetails: { "غرفة دابل": "1400 جنيه", "غرفة تريبل": "1300 جنيه" },
        roomsCount: 3,
        totalBeds: 7,
        bedsAvailable: 7,
        images: [
            "https://i.ibb.co/jPNLgmgK/IMG-20260606-WA0007.jpg",
            "https://i.ibb.co/dZbjqg1/IMG-20260606-WA0006.jpg",
            "https://i.ibb.co/6Jr2w0dj/IMG-20260606-WA0004.jpg",
            "https://i.ibb.co/ycYvnw2X/IMG-20260606-WA0008.jpg",
            "https://i.ibb.co/CKpw9bwB/IMG-20260606-WA0002.jpg",
            "https://i.ibb.co/57hHMh1/IMG-20260606-WA0003.jpg",
            "https://i.ibb.co/gMq8DCSr/IMG-20260606-WA0005.jpg"
        ],
        desc: "فيلا سكن طالبات مميزة مكونة من 4 أدوار، تحتوي على 3 غرف (2 دابل + 1 تريبل) بشمال الجامعة. موقع استراتيجي قريب جداً من سفنكس والجامعة الأهلية، مع توفير كافة سبل الراحة والأمان.",
        features: ["سيارة خاصة", "كاميرات مراقبة", "إشراف أمني", "ديب فريزر", "واي فاي"],
        video: "dQw4w9WgXcQ"
    }
];

let filteredRooms = [...roomsData];
let currentLimit = 4;
const cardsPerPage = 4;

function renderCards() {
    const grid = document.getElementById("listings-grid");
    const loadMoreContainer = document.getElementById("load-more-container");
    grid.innerHTML = "";

    const visibleRooms = filteredRooms.slice(0, currentLimit);

    if (visibleRooms.length === 0) {
        grid.innerHTML = `<div style="grid-column: 1/-1; text-align: center; padding: 40px;">لا توجد سكنات تطابق الفلتر..</div>`;
        loadMoreContainer.style.display = "none";
        return;
    }

    visibleRooms.forEach(room => {
        const isFull = room.bedsAvailable === 0;
        grid.insertAdjacentHTML("beforeend", `
            <div class="card">
                <div class="card-img-wrapper">
                    <span class="badge-id">${room.id}</span>
                    <span class="badge-type">${room.type}</span>
                    ${isFull ? '<div class="badge-status-full">مكتمل</div>' : ''}
                    
                    <!-- تم تعديل السطر ده علشان يستخدم الدالة الذكية -->
                    <img src="${getCleanUrl(room.images[0])}" alt="${room.title}">
                    
                </div>
                <div class="card-content">
                    <h3 class="card-title">${room.title}</h3>
                    <ul class="card-info" style="list-style:none; padding:0; margin:10px 0;">
                        <li><i class="fa-solid fa-location-dot"></i> ${room.city}</li>
                        <li><i class="fa-solid fa-door-open"></i> ${room.roomsCount} غرف / ${room.totalBeds} سرير</li>
                        <li><i class="fa-solid fa-bed"></i> متاح: ${room.bedsAvailable} سرير</li>
                    </ul>
                    <div class="price-tag" style="font-weight:bold; color:var(--primary-color);">${room.price}</div>
                    <div class="card-actions" style="margin-top:10px;">
                        <button class="btn btn-details" onclick="openModal('${room.id}')">التفاصيل</button>
                        <button class="btn btn-book ${isFull ? 'btn-disabled' : ''}" onclick="bookNowAlert('${room.id}')">احجز الآن</button>
                    </div>
                </div>
            </div>
        `);
    });
    loadMoreContainer.style.display = (currentLimit >= filteredRooms.length) ? "none" : "block";
}

function loadMoreCards() {
    currentLimit += cardsPerPage;
    renderCards();
}

function openModal(roomId) {
    const room = roomsData.find(r => r.id === roomId);
    if (!room) return;

    const modal = document.getElementById("details-modal");
    // --- إضافة زرار الفيديو ديناميكياً تحت الوصف ---
    const oldVideoBtn = document.getElementById("modal-video-btn");
    if (oldVideoBtn) oldVideoBtn.remove();

    if (room.video && room.video.trim() !== "") {
        const videoBtn = document.createElement("a");
        videoBtn.id = "modal-video-btn";
        videoBtn.href = `https://www.youtube.com/watch?v=${room.video}`;
        videoBtn.target = "_blank";
        videoBtn.innerHTML = `<i class="fa-brands fa-youtube" style="margin-left: 8px; color: #ff0000;"></i>مشاهدة فيديو السكن`;
        
        videoBtn.style.display = "inline-flex";
        videoBtn.style.alignItems = "center";
        videoBtn.style.justifyContent = "center";
        videoBtn.style.marginTop = "15px";
        videoBtn.style.padding = "10px 20px";
        videoBtn.style.backgroundColor = "#fff";
        videoBtn.style.border = "2px solid #8a2be2";
        videoBtn.style.color = "#8a2be2";
        videoBtn.style.borderRadius = "8px";
        videoBtn.style.textDecoration = "none";
        videoBtn.style.fontWeight = "bold";
        videoBtn.style.cursor = "pointer";
        videoBtn.style.boxShadow = "0 2px 5px rgba(0,0,0,0.1)";
        
        document.getElementById("modal-desc").after(videoBtn);
    }
    // --------------------------------------------
    document.getElementById("modal-title").innerText = room.title;
    document.getElementById("modal-desc").innerText = room.desc;
    
    document.getElementById("modal-img").src = getCleanUrl(room.images[0]);

    const thumbnailsContainer = document.getElementById("modal-thumbnails");
    thumbnailsContainer.innerHTML = ""; 
    if (room.images.length > 1) {
        room.images.forEach((imgSrc, index) => {
            const thumb = document.createElement("img");
            thumb.src = getCleanUrl(imgSrc);

            thumb.alt = "صورة مصغرة للسكن";
            if(index === 0) thumb.classList.add("active-thumb");
            
            thumb.onclick = function() {
                    document.getElementById("modal-img").src = getCleanUrl(imgSrc); 
                    
                    document.querySelectorAll("#modal-thumbnails img").forEach(img => img.classList.remove("active-thumb"));
                    this.classList.add("active-thumb");
                };
            thumbnailsContainer.appendChild(thumb);
        });
    }

    const featuresList = document.getElementById("modal-features");
    featuresList.innerHTML = ""; 
    if (room.features && room.features.length > 0) {
        room.features.forEach(feature => {
            featuresList.innerHTML += `<div><i class="fa-solid fa-check-circle" style="color: var(--primary-color);"></i> ${feature}</div>`;
        });
    }

    const modalSubmitBtn = document.getElementById("modal-submit-btn");
    modalSubmitBtn.setAttribute("onclick", `bookNowAlert('${room.id}')`);
    
    if (room.bedsAvailable === 0) {
        modalSubmitBtn.classList.add("btn-disabled");
        modalSubmitBtn.innerText = "عذراً، السكن مكتمل";
        modalSubmitBtn.removeAttribute("onclick");
    } else {
        modalSubmitBtn.classList.remove("btn-disabled");
        modalSubmitBtn.innerText = "احجز السكن الآن";
    }

    const oldPrice = document.getElementById("modal-price-container");
    if (oldPrice) oldPrice.remove();

    let priceHTML = `<div id="modal-price-container" style="margin: 15px 0; padding: 15px; background: rgba(108, 43, 161, 0.1); border-radius: 8px;">
        <h4 style="color: var(--primary-color); margin-bottom: 10px;">💰 تفاصيل الأسعار:</h4>`;
    if (room.priceDetails) {
        Object.entries(room.priceDetails).forEach(([k, v]) => {
            priceHTML += `<div style="display:flex; justify-content:space-between; border-bottom:1px dashed #ccc; padding:5px 0;"><span>${k}</span> <strong>${v}</strong></div>`;
        });
    } else {
        priceHTML += `<div style="display:flex; justify-content:space-between; padding:5px 0;"><span>السعر:</span> <strong>${room.price}</strong></div>`;
    }
    priceHTML += `</div>`;

    document.getElementById("modal-desc").insertAdjacentHTML('afterend', priceHTML);
    modal.classList.add("active");
}

function bookNowAlert(roomId) {
    const room = roomsData.find(r => r.id === roomId);
    if (!room) return;

    let msg = `🏠 أهلاً سكنكو.. أرغب في الاستفسار عن السكن:\n\n`;
    msg += `📌 كود السكن: ${room.id}\n`;
    msg += `🏠 العنوان: ${room.title}\n`;
    msg += `📍 المنطقة: ${room.city}\n`;
    msg += `👥 النوع: ${room.type}\n`;
    
    if (room.priceDetails) {
        msg += `\n💵 الأسعار:\n`;
        Object.entries(room.priceDetails).forEach(([k, v]) => {
            msg += `- ${k}: ${v}\n`;
        });
    } else {
        msg += `💰 السعر: ${room.price}\n`;
    }

    if (room.features && room.features.length > 0) {
        msg += `\n✨ المميزات:\n- ${room.features.join('\n- ')}\n`;
    }

    msg += `\n💬 هل السكن متاح حالياً للمعاينة؟`;

    window.open(`https://wa.me/201025910607?text=${encodeURIComponent(msg)}`, '_blank');
}

// ==========================================
// الدوال الجديدة المضافة
// ==========================================

function toggleTheme() {
    const body = document.body;
    body.classList.toggle("light-mode");
    
    if (body.classList.contains("light-mode")) {
        localStorage.setItem("sakanko-theme", "light");
    } else {
        localStorage.removeItem("sakanko-theme");
    }
}

function resetFilters() {
    document.getElementById("city-filter").value = "all";
    document.getElementById("type-filter").value = "all";
    filteredRooms = [...roomsData];
    currentLimit = cardsPerPage;
    renderCards();
}

function filterRooms() {
    const city = document.getElementById("city-filter").value;
    const type = document.getElementById("type-filter").value;
    filteredRooms = roomsData.filter(r => (city === "all" || r.city === city) && (type === "all" || r.type === type));
    currentLimit = cardsPerPage;
    renderCards();
}

function applySavedTheme() {
    const saved = localStorage.getItem("sakanko-theme");
    if (saved === "light") document.body.classList.add("light-mode");
}

document.addEventListener("DOMContentLoaded", () => {
    applySavedTheme();
    renderCards();
});