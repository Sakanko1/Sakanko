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
    type: "بنات",
    price: "1350 جنيه / شهرياً",
    priceDetails: { "غرفة تريبل": "1350 جنيه" , "غرفة دابل": "1500 جنيه", "غرفة سنجل": "2000 جنيه" },
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
    title: "المرحلة الرابعة",
    city: "المرحلة الرابعة",
    type: "شباب",
    price: "1200 جنيه / شهرياً للسرير",
    roomsCount: 3, 
    totalBeds: 6,
    bedsAvailable: 0,
    images: [
    "https://i.ibb.co/fGkP1HS0/IMG-20260609-WA0062-1.jpg" ,
"https://i.ibb.co/mFrY275x/IMG-20260609-WA0061-1.jpg" ,
"https://i.ibb.co/ynZ1tZ39/IMG-20260609-WA0060-1.jpg" ,
"https://i.ibb.co/vvx3C2hG/IMG-20260609-WA0059-1.jpg" ,
"https://i.ibb.co/W4JVDH26/IMG-20260609-WA0058-1.jpg" ,
"https://i.ibb.co/ycpbTrSN/IMG-20260609-WA0057-1.jpg" ,
    ],
    desc: "سكن مخصص للشباب في منطقة المرحلة الرابعة، فيلا بها 3 شقق متوفرين للسكن, يتميز بموقع استراتيجي قريب جداً من الجامعة والمواصلات لسهولة التنقل وتلبية الاحتياجات اليومية. السكن يوفر 6 أسرّة مريحة.",
    features: ["قرب المواصلات", "قرب الجامعة", "موقع حيوي", "سكن مخصص للشباب"]
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
    features: ["موقع حيوي", "كافيه ملحق بالبيت", "قرب الخدمات", "خيارات غرف متعددة"],
    video: "",
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
    bedsAvailable: 0,
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
    id: "SK-107",
    title: "فيلا سكن طالبات - شمال الجامعة (تجهيزات حديثة)",
    city: "شمال الجامعة",
    type: "بنات",
    price: "1300 جنيه / شهرياً",
    priceDetails: { "غرفة دابل": "1400 جنيه", "غرفة تريبل": "1300 جنيه" },
    roomsCount: 4,
    totalBeds: 9, // يرجى تحديد العدد الإجمالي إذا كان متاحاً
    bedsAvailable: 9, // يرجى تحديد عدد الأسرة المتاحة
    images: [
        "https://i.ibb.co/SXDZwHJp/IMG-20260606-WA0040.jpg", 
"https://i.ibb.co/fd5dpxcj/IMG-20260606-WA0037.jpg", 
"https://i.ibb.co/HfzstQDT/IMG-20260606-WA0039.jpg", 
"https://i.ibb.co/jPzvFTYX/IMG-20260606-WA0035.jpg", 
"https://i.ibb.co/gFzXFz9x/IMG-20260606-WA0038.jpg", 
"https://i.ibb.co/tp1cmJFf/IMG-20260606-WA0036.jpg", 
"https://i.ibb.co/N6JRh97J/IMG-20260606-WA0041-1.jpg", 
    ],
    desc: "فيلا سكن طالبات مكونة من 4 أدوار بشمال الجامعة، موقع استراتيجي قريب من سفنكس والجامعة الأهلية. السكن مجهز بأجهزة جديدة بالكامل بما في ذلك ديب فريزر، مع توفير خدمة سيارة خاصة للسكن.",
    features: ["سيارة خاصة", "كاميرات مراقبة", "إشراف أمني", "مشرفة مقيمة", "ديب فريزر", "واي فاي", "أجهزة حديثة"],
    video: ""
},
  {
    id: "SK-108",
    title: "شقة المرحلة الأولى - موقع مميز",
    city: "المرحلة الأولى",
    type: "بنات",
    price: "1800 جنيه / شهرياً",
    priceDetails: { "السعر": "1800 جنيه" },
    roomsCount: 3,
    totalBeds: 7,
    bedsAvailable: 7,
    images: [
        "https://i.ibb.co/ymxM7PVL/IMG.jpg",
        "https://i.ibb.co/Y7nQ57S0/IMG-20260623-WA0119.jpg",
        "https://i.ibb.co/ycBk5jqW/IMG-20260623-WA0120.jpg",
        "https://i.ibb.co/fdqJy4s4/IMG-20260623-WA0121.jpg",
        "https://i.ibb.co/MDc8gtmq/IMG-20260623-WA0118.jpg"
    ],
    desc: "شقة بموقع استراتيجي ومميز جداً، تتكون من وحدتين سكنيتين (دور أرضي ودور ثالث). الشقة مجهزة بالكامل ومكيفة، وتوفر بيئة مريحة للطالبات.",
    features: ["مكيف هواء", "فلتر مياه", "موقع حيوي", "قريب من الخدمات"],
    video: ""
},
{
    id: "SK-109",
    title: "سكن دار الريس للطالبات - شمال الجامعة",
    city: "شمال الجامعة",
    type: "بنات",
    price: "1000 جنيه / شهرياً (للسمر)",
    priceDetails: { 
        "سمر": "1000 جنيه", 
        "غرفة دابل (للسنة الجديدة)": "1600 جنيه", 
        "غرفة تريبل (للسنة الجديدة)": "1500 جنيه" 
    },
    roomsCount: 5, // بناءً على المعطيات (شقتين + غرف السنة)
    totalBeds: 18, // (9 أسرة * 2 شقة سمر)
    bedsAvailable: 18, 
    images: [
        "https://i.ibb.co/9HDB3J3F/IMG-20260607-WA0030.jpg",
       "https://i.ibb.co/tpjbdDrB/IMG-20260607-WA0020.jpg",
"https://i.ibb.co/mrbMj2Vz/IMG-20260607-WA0026.jpg",
"https://i.ibb.co/BKd4F8mG/IMG-20260607-WA0031.jpg",
"https://i.ibb.co/gMbzpZ0d/IMG-20260622-WA0041.jpg",

"https://i.ibb.co/sp4ByD9Z/IMG-20260607-WA0036.jpg",
"https://i.ibb.co/4wv7CPHM/IMG-20260607-WA0021.jpg",
"https://i.ibb.co/gMSDJ2H5/IMG-20260607-WA0032.jpg",
"https://i.ibb.co/JWKpsnKg/IMG-20260607-WA0035.jpg",
"https://i.ibb.co/bRX9176P/IMG-20260607-WA0029.jpg",
"https://i.ibb.co/YFCkVz4V/IMG-20260607-WA0033.jpg",
"https://i.ibb.co/F49dN1qx/IMG-20260622-WA0040.jpg",
"https://i.ibb.co/5gb6b4QN/IMG-20260622-WA0039.jpg",
"https://i.ibb.co/ynW8kvX4/IMG-20260607-WA0056.jpg",
"https://i.ibb.co/tTw4f8QX/IMG-20260607-WA0023.jpg",
"https://i.ibb.co/7d68QwsS/IMG-20260607-WA0024.jpg",
"https://i.ibb.co/7xcphJv7/IMG-20260607-WA0028.jpg",
    ],
    desc: "سكن دار الريس فيلا 1338، أقرب فيلا للجامعة (7 دقائق مشي). سكن فندقي مكيف بالكامل يوفر خيارات متنوعة للسمر وللعام الدراسي الجديد، مع توافر   إشراف وحراسة مقيمين لضمان الراحة والأمان ومتوفر شقتين للسمر كل شقه 9 أسره وغرفه دبل و 3 غرف تريبل .",
    features: [
        "مكيف بالكامل", 
        "فرش فندقي",  
        "سيارة خاصة", 
        "مشرفة وحارس مقيمين", 
        "راوتر خاص بكل شقة", 
        "قريب من الجامعة"
    ],
    video: ""
},
{
    id: "SK-110",
    title: " شمال الجامعة (عند سوبر ماركت أبو دياب)",
    city: "شمال الجامعة",
    type: "شباب",
    price: " 1300 جنيه / شهرياً",
    roomsCount: 2, 
    totalBeds: 4,
    bedsAvailable: 4,
    images: [
"https://i.ibb.co/Q7Pjg7by/Screenshot-You-Tube.jpg", 
    ],
    desc: ",سكن مميز في شمال الجامعة بجوار سوبر ماركت أبو دياب ويوجد كافيه بالأسفل.  السكن يتكون  من غرفتين دبل ",   
    features: ["موقع حيوي", "كافيه ملحق بالبيت", "قرب الخدمات", "خيارات غرف متعددة"], 
video: "eBThBBHF8M0",

},

{
    id: "SK-111",
    title: "سكن طلاب - المرحلة الثانية",
    city: "المرحلة الثانية",
    type: "شباب",
    price: "1100 جنيه / شهرياً",
    priceDetails: { "سعر موحد": "1100 جنيه" },
    roomsCount: 2,
    totalBeds: 4,
    bedsAvailable: 4,
    images: [
        "https://i.ibb.co/Xx5S2q1x/IMG-20260624-WA0105.jpg",
        "https://i.ibb.co/cXhmzr8H/IMG-20260624-WA0003.jpg",
        "https://i.ibb.co/d4qMpq0H/IMG-20260624-WA0000.jpg",
        "https://i.ibb.co/d44Pd31w/IMG-20260624-WA0001.jpg",
        "https://i.ibb.co/1GztX3B0/IMG-20260624-WA0002.jpg",
        "https://i.ibb.co/Xr0bbCXD/IMG-20260624-WA0004.jpg",
        "https://i.ibb.co/fGkrjVBd/IMG-20260624-WA0005.jpg",
        "https://i.ibb.co/CpgjjTsp/IMG-20260624-WA0106.jpg",
        "https://i.ibb.co/twQpjLxj/IMG-20260624-WA0006.jpg"
    ],
    desc: "سكن متميز في المرحلة الثانية، موقع استراتيجي قريب جداً من المرحلة الرابعة، العشر عماير، عماير محلب، وسوبر ماركت عالم التوفير. السكن مجهز لتوفير بيئة مريحة وهادئة للطلاب.",
    features: ["موقع حيوي", "قريب من الخدمات", "سوبر ماركت قريب", "هدوء"],
    video: ""
},

{
    id: "SK-112",
    title: "سكن عماير محلب (بجوار دبور)",
    city: "عماير محلب",
    type: "شباب",
    price: "1200 جنيه / شهرياً",
    roomsCount: 3, 
    totalBeds: 6,
    bedsAvailable: 6,
    images: [
        "https://i.ibb.co/5h8gyRqq/IMG-20260624-WA0025.jpg",
        "https://i.ibb.co/LdqsSsyt/IMG-20260624-WA0020.jpg",
        "https://i.ibb.co/5gNxRD4m/IMG-20260624-WA0015.jpg",
        "https://i.ibb.co/gbn6n1dR/IMG-20260624-WA0017.jpg",
        "https://i.ibb.co/BbyNNHj/IMG-20260624-WA0018.jpg",
        "https://i.ibb.co/spXhtJsK/IMG-20260624-WA0021.jpg",
        "https://i.ibb.co/ksrWqbHF/IMG-20260624-WA0023.jpg",
        "https://i.ibb.co/BVNY6VZg/IMG-20260624-WA0024.jpg",
        "https://i.ibb.co/Q3pfcFgb/IMG-20260624-WA0016.jpg",
        "https://i.ibb.co/SX3FbgxQ/IMG-20260624-WA0022.jpg",
        "https://i.ibb.co/QFkgVKR7/IMG-20260624-WA0013.jpg",
        "https://i.ibb.co/JjBK2ws6/IMG-20260624-WA0019.jpg",
        "https://i.ibb.co/pj7bLq4d/IMG-20260624-WA0014.jpg" 
    ],
    desc: "سكن في عماير محلب بجوار دبور، قريب من الخدمات زي السوبر ماركت والمكتبة والمطعم والمواصلات. السكن مجهز بسخان وموتور مياه وديب فريزر وخلاط. ملحوظة هامة: لو حد عايز ياخد أوضة لوحده هتبقى بـ 2000 جنيه بدلاً من 2400 جنيه.",   
    features: ["قريب من الخدمات والمواصلات", "بجوار دبور", "مجهز بالأجهزة الكهربائية", "موتور مياه"], 
    video: "",
},

{
    id: "SK-113",
    title: "سكن مجهز بجوار ملعب أم يوسف",
    city: "السوق القديم",
    type: "شباب",
    price: "1700 جنيه / شهرياً",
    roomsCount: 2, 
    totalBeds: 4,
    bedsAvailable: 4,
    images: [
        "https://i.ibb.co/Kc6vPcGf/IMG-20260624-WA0041.jpg",
        "https://i.ibb.co/bg7g8r8N/IMG-20260624-WA0031.jpg",
        "https://i.ibb.co/Fk9bcXtR/IMG-20260624-WA0026.jpg",
        "https://i.ibb.co/v4yWDSFt/IMG-20260624-WA0036.jpg",
        "https://i.ibb.co/N6b9Q2S3/IMG-20260624-WA0033.jpg",
        "https://i.ibb.co/fGHYgzxT/IMG-20260624-WA0029.jpg",
        "https://i.ibb.co/21qffZtc/IMG-20260624-WA0034.jpg",
        "https://i.ibb.co/FkWNhF0P/IMG-20260624-WA0035.jpg",
        "https://i.ibb.co/FL6TWbgF/IMG-20260624-WA0028.jpg",
        "https://i.ibb.co/Xfnn1wHQ/IMG-20260624-WA0040.jpg",
        "https://i.ibb.co/99Cnym4j/IMG-20260624-WA0037.jpg",
        "https://i.ibb.co/0yC6tF6K/IMG-20260624-WA0032.jpg",
        "https://i.ibb.co/BVqyXcQk/IMG-20260624-WA0038.jpg",
        "https://i.ibb.co/99Q1gbGf/IMG-20260624-WA0030.jpg",
        "https://i.ibb.co/gFgjCVrb/IMG-20260624-WA0027.jpg"
    ],
    desc: "شقة مجهزة بالكامل في منطقة حيوية بالسوق القديم بجوار ملعب أم يوسف، متوفر بها كافة الأجهزة، وقريبة جداً من جميع الخدمات ومواصلات الجامعة والموقف.",   
    features: ["إنترنت (واي فاي)", "تلفزيون", "غسالة وثلاجة", "سخان وخلاط", "منطقة حيوية", "قريب من المواصلات"], 
    video: "",
},
{
    "id": "SK-114",
    "title": "أمام الخلاطة - المرحلة الرابعة - ابني بيتك",
    "city": "المرحلة الرابعة",
    "type" : "شباب",
    "price": "1200 جنيه / شهرياً",
    "roomsCount": 2,
    "totalBeds": 4,
    "bedsAvailable": 4,
    "images": ["https://i.ibb.co/gZ7g4sk9/Screenshot-2026-06-27-050845.png"],
    "desc": "شقة في الدور الأول علوي، سكن مفروش بالكامل ومجهز بجميع الأجهزة الكهربائية، يتوفر راوتر واي فاي، موقع استراتيجي أمام الجامعة الأهلية وجامعة سفنكس مباشرة.",
    "features": [
        "دور أول علوي",
        "سكن مفروش بالكامل",
        "مجهز بجميع الأجهزة الكهربائية",
        "راوتر واي فاي",
        "موقع متميز أمام الجامعات"
    ],
    "video": "OdEXzStCjdw"
},
{
    id: "SK-115", 
    title: "  السوق الجديد - عمارات الكهرباء",
    city: "السوق الجديد ",
    type: "بنات",
    price: "1500 جنيه / شهرياً",
    roomsCount: 2, 
    totalBeds: 4,
    bedsAvailable: 4,
    images: ["https://i.ibb.co/k25qt1VG/IMG-20260628-WA0127.jpg",],


    desc: "سكن بنات متميز في موقع استراتيجي، تقع عمارات الكهرباء على يسارك وأنت متجه للموقف، والمستشفى على اليمين.",
    features: ["موقع استراتيجي", "قرب من الموقف", "قرب من المستشفى"],
    "video": "nuNf3L3-ito"
},
{
    id: "SK-116", 
    title: "السوق الجديد  - عمائر الكهرباء",
    city: " السوق الجديد",
    type: "شباب",
    price: "700 جنيه / شهرياً",
    roomsCount: 2, 
    totalBeds: 4, // تم تقديرها بناءً على المتاح
    bedsAvailable: 4, // السكن تم تأجيره بالكامل
    images: [
"https://i.ibb.co/yBqt0FYx/IMG-20260628-WA0095.jpg",
"https://i.ibb.co/QvyqZR5N/IMG-20260628-WA0090.jpg",
"https://i.ibb.co/C3VX4kDw/IMG-20260628-WA0088.jpg",
"https://i.ibb.co/tMdbPbFG/IMG-20260628-WA0094.jpg",
"https://i.ibb.co/zTTJNHP6/IMG-20260628-WA0093.jpg",
"https://i.ibb.co/bgvFDcNc/IMG-20260628-WA0092.jpg",
"https://i.ibb.co/KpYqyVv5/IMG-20260628-WA0089.jpg",
"https://i.ibb.co/WpxV0Lg7/IMG-20260628-WA0087.jpg",
"https://i.ibb.co/B2PXHKg7/IMG-20260628-WA0086.jpg",
"https://i.ibb.co/Kpgs5jgT/IMG-20260628-WA0127.jpg",

    ],
    desc: "سكن شباب في موقع متميز خلف الكهرباء والخديوي، متاحة سمر فقط ، تم تأجير السكن لسنة جديدة.",
    features: ["موقع خلف الكهرباء والخديوي", "غير مكيفة"]
},
{
    id: "SK-117",
    title: "السوق الجديد  - إسكان الشباب",
    city: "السوق الجديد  - شارع المعاهد",
    type: "شباب",
    price: "750 جنيه / شهرياً",
roomsCount: 2, 
    totalBeds: 4,  
    bedsAvailable: 4,  
    images: [


    ],
    desc: "سكن شباب في موقع مميز في إسكان الشباب بشارع المعاهد سمر فقط",
    features: ["موقع حيوي", "شارع المعاهد"],
                "video": "Y24X6CcxQ8U"

},
{
            id: "SK-118",
            title:"عماير محلب",
            city: "عماير محلب  - خلف دبور",
            type: "شباب او بنات", // (يرجى التحديد)
            price: " 1000 ج.م",
            roomsCount: 3,
            totalBeds: 6,
            bedsAvailable: 6, 
            images: [

"https://i.ibb.co/9kYmXBjv/IMG-20260628-WA0126.jpg",
"https://i.ibb.co/zHHdL5S1/IMG-20260628-WA0125.jpg",
"https://i.ibb.co/GQ90JYXy/IMG-20260628-WA0124.jpg",
"https://i.ibb.co/mVjnLfTq/IMG-20260628-WA0108-1.jpg",
"https://i.ibb.co/HTdGMKDd/IMG-20260628-WA0122.jpg",
"https://i.ibb.co/Y4gy0T3D/IMG-20260628-WA0123.jpg",
"https://i.ibb.co/whYBz77N/IMG-20260628-WA0121.jpg",
"https://i.ibb.co/KcM1PJw8/IMG-20260628-WA0120.jpg",
"https://i.ibb.co/8Lcck95H/IMG-20260628-WA0119.jpg",
"https://i.ibb.co/67JRRxWQ/IMG-20260628-WA0116.jpg",
"https://i.ibb.co/zH7LkpTp/IMG-20260628-WA0105-1.jpg",
"https://i.ibb.co/0HhZ4KL/IMG-20260628-WA0118.jpg",
"https://i.ibb.co/6J1Sfbk7/IMG-20260628-WA0117.jpg",
"https://i.ibb.co/pvP50tdj/IMG-20260628-WA0112.jpg",
"https://i.ibb.co/9HwttKhr/IMG-20260628-WA0111-1.jpg",
"https://i.ibb.co/XZjZs8ZX/IMG-20260628-WA0115.jpg",
"https://i.ibb.co/cXhm2WN3/IMG-20260628-WA0114.jpg",
"https://i.ibb.co/9HwttKhr/IMG-20260628-WA0111-1.jpg",
"https://i.ibb.co/DHv8T51B/IMG-20260628-WA0110.jpg",
"https://i.ibb.co/QhK6QBd/IMG-20260628-WA0113.jpg",
"https://i.ibb.co/4CDmf6x/IMG-20260628-WA0109.jpg",
"https://i.ibb.co/1f4m4RnW/IMG-20260628-WA0106.jpg",
"https://i.ibb.co/QFN2cXMM/IMG-20260628-WA0107.jpg",
"https://i.ibb.co/mVjnLfTq/IMG-20260628-WA0108-1.jpg",
"https://i.ibb.co/p63vZRmv/IMG-20260628-WA0104.jpg",
"https://i.ibb.co/zH7LkpTp/IMG-20260628-WA0105-1.jpg",
    ],
            features: ["قريب من السنتر", "دور تالت", "كل غرفة 2 سرير ", "  3 غرف "]
        },

{
            id: "SK-119",
            title: " السوق الجديد - أمام المستشفى",
            city: " السوق الجديد ",
            type: "بنات",
            price: "1500 ج.م (  سنة جديدة) / 750 ج.م (سمر)",
            roomsCount: 2,
            totalBeds: 4,
            bedsAvailable: 4, 
            images: ["https://i.ibb.co/1YfJHnF8/Screenshot-Whats-App.jpg",],
            features: ["أمام المستشفى", "سرير الصالة مجاني", "دور ثاني"],
            "video": "Dc0vBy8uWmU"
        },

        {
            id: "SK-120",
            title: "المرحلة الخامسة   - كشري المدينة",
            city: " المرحلة الخامسة (اول بيت)",
            type: "شباب(مسيحيين)",
            price: "تبدأ من 1400 ج.م",
            priceDetails: { "غرفة دبل": "1500 ج.م", "غرفة تريبل": "1400 ج.م" },
            roomsCount: 3,
            totalBeds: 7,
            bedsAvailable: 4, 
            images: [
"https://i.ibb.co/99yV8KYP/IMG-20260628-WA0057.jpg",
"https://i.ibb.co/3tdfFS9/IMG-20260628-WA0056.jpg",
"https://i.ibb.co/jNbDf6Z/IMG-20260628-WA0055.jpg",
"https://i.ibb.co/5h8jqCMP/IMG-20260628-WA0048.jpg",
"https://i.ibb.co/JWr6rgjR/IMG-20260628-WA0047.jpg",
"https://i.ibb.co/hFFDFTXB/IMG-20260628-WA0054.jpg",
"https://i.ibb.co/dwtBG1kd/IMG-20260628-WA0050.jpg",
"https://i.ibb.co/1YS271my/IMG-20260628-WA0053.jpg",
"https://i.ibb.co/BHC7Vpbb/IMG-20260628-WA0052.jpg",
"https://i.ibb.co/C3GHt60d/IMG-20260628-WA0051.jpg",
"https://i.ibb.co/M4YfpFM/IMG-20260628-WA0039.jpg",
"https://i.ibb.co/QvbJgCnR/IMG-20260628-WA0045.jpg",
"https://i.ibb.co/SwRYgwt5/IMG-20260628-WA0049.jpg",
"https://i.ibb.co/4ZGHfLJ8/IMG-20260628-WA0044.jpg",
"https://i.ibb.co/XchDn24/IMG-20260628-WA0043.jpg",
"https://i.ibb.co/677SJtXk/IMG-20260628-WA0040.jpg",
"https://i.ibb.co/V0344qV6/IMG-20260628-WA0042.jpg",
"https://i.ibb.co/CsSCXX7Q/IMG-20260628-WA0041.jpg",
"https://i.ibb.co/NgJs9SKP/IMG-20260628-WA0038.jpg",

    ],
            features: ["تشطيب سوبر لوكس", "قريب من الخدمات", "أول بيت في الخامسة"]
        },
          {
    id: "SK-121",
    title: "المرحلة الرابعة - خلف المديرية",
    city: "المرحلة الارابعة  ",
    type: "بنات",
    price: "1000 ج.م",
    priceDetails: { "غرفة مشتركة": "1000 ج.م", "سنجل": "1600 ج.م", "سعر السمر": "600 ج.م" },
    roomsCount: 3,
    totalBeds: 5,
    bedsAvailable: 5,
    images: [
"https://i.ibb.co/BHtKCtDh/IMG-20260611-WA0072.jpg",
"https://i.ibb.co/fGtzsVQh/IMG-20260611-WA0069.jpg",
"https://i.ibb.co/39MC8sjG/IMG-20260628-WA0034.jpg",
"https://i.ibb.co/sztXfrq/IMG-20260611-WA0070.jpg",
"https://i.ibb.co/8nwNFssN/IMG-20260611-WA0075.jpg",
"https://i.ibb.co/Xk2Xj2LP/IMG-20260611-WA0073.jpg",
"https://i.ibb.co/Kj1RvYdV/IMG-20260611-WA0071.jpg",

    ],
    features: ["ثلاجة", "غسالة", "خلاط", "مكواة", "راوتر", "ديب فريزر"]
},


 {
    id: "SK-122",
    title: " العشر عماير",
    city: "   دور ارضي- العشر عماير",
    type: "بنات او اولاد",
    price: "1150 ج.م",
    
        priceDetails: { "متاحة للسمر  ": "650 ج.م" },

    roomsCount: 3,
    totalBeds: 5,
    bedsAvailable: 5,
    images: [

"https://i.ibb.co/vC8Twpn8/IMG-20260628-WA0097-1.jpg",
"https://i.ibb.co/TBhdp9BJ/IMG-20260628-WA0103.jpg",
"https://i.ibb.co/tpDXySf6/IMG-20260628-WA0096-1.jpg",
"https://i.ibb.co/qFnJY8tc/IMG-20260628-WA0099-1.jpg",
"https://i.ibb.co/fdLWCZXp/IMG-20260628-WA0098-1.jpg",
"https://i.ibb.co/Ldf2ytVG/IMG-20260628-WA0102.jpg",
"https://i.ibb.co/qFnJY8tc/IMG-20260628-WA0099-1.jpg",
"https://i.ibb.co/tM77vy2k/IMG-20260628-WA0100.jpg",
"https://i.ibb.co/hR0nRJC9/IMG-20260628-WA0101.jpg",
"https://i.ibb.co/fdLWCZXp/IMG-20260628-WA0098-1.jpg",
    ],
    features: ["ثلاجة", "غسالة", "خلاط", "مكواة", "راوتر", "ديب فريزر"]
},
    
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

    window.open(`https://wa.me/201214731468?text=${encodeURIComponent(msg)}`, '_blank');
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
