///////////////   DATA TYPES

// 1-MISOL: Uzunligi L berilgan Undagi to'liq metrlar sonini aniqlovchi progrramm tuzing!
// sharti xatomasmi?   L NIMA U??? L km mi yoki sm yoki L dm......

// 2-MISOL: Og'irligi M kg da berilgan Uning to'liq tonnalar sonini aniqlang. 1t = 1000kg
function misol2(vazn){
    // let t;
    if(vazn>=1000){
    t=Math.floor(vazn/1000);
    console.log(`${vazn} kg dagi tonnalar soni : ${t} ga teng `);
    }
    else console.log(`1000dan yuqori son kiriting, chunki 1t=1000kg. 1000dan ham kg kiritsangiz baribir tonnalar  soni 0 ha teng boladi!`);
}
misol2(123356);
// 3-MISOL: A va B musbat sonlar (A > B a b dan katta) A kesmada B kesmani necha marta joylashtirish mumkin!
function misol3(a,b){
    if(a>b){
    t=Math.floor(a/b);
    console.log(`${a} lik kesmada ${b} lik kesmani ${t} marta joylashtirish mumkin `);
    }
    else console.log(`a kesma b kesmadan katta bo'lishi kk`);
}
misol3(23,6);
// 4-MISOL: Ikki xonali son berilgan uning o'nliklar xonasidagi va birliklar xonasida raqamini aniqlang!
function misol4(a){
    x=Math.floor(a/10);
    console.log(`Siz kiritgan ${a} - ikki xonali sonning o'nliklar xonasidagi raqami : ${x} ga teng`);
    y=a%10;
    console.log(`Siz kiritgan ${a} - ikki xonali sonning birliklar xonasidagi raqami : ${y} ga teng`);
}
misol4(96);
// 5-MISOL: Ikki xonali son berilgan uning raqamlar yig'indisin topuvchi programma tuzing!
function misol5(a){
    x=Math.floor(a/10);
    y=a%10;
    console.log(`Siz kiritgan ${a} - ikki xonali sonning raqamlar yig'indisi : ${x+y} ga teng`);
}
misol5(77);
// 6-MISOL: Ikki xonali son berilgan Uning raqamlar ko'paytmasini topuvchi programma tuzing!
function misol6(a){
    x=Math.floor(a/10);
    y=a%10;
    console.log(`Siz kiritgan ${a} - ikki xonali sonning raqamlar ko'paytmasi : ${x*y} ga teng`);
}
misol6(25);
// 7-MISOL: 999 dan katta son berilgan bolib butun olib va qoldiqli bo'lish operatsiyasidan foydalanib yuzlarni topuvchi dastur tuzing!
function misol7(n){
    if(n>999){
    y=(n-(n%100))/100;
    console.log(`siz kiritgan ${n} soni ichida yuzlar soni ${y} ga teng! `);
    }
    else console.log(`999 dan katta son kiriting!`);
}
misol7(1324);
// 8-MISOL: Kun boshidan N sekund o'tdi kun boshidan necha minut, soat, o'tganligin aniqlang
function misol8(n){
    minut=Math.floor(n/60);  //1 min= 60 sek bo'lgani uchun
    soat=Math.floor(n/3600);  // 1soat=60 min=3600 sek bo'lgani uchun
    
    console.log(`Kun boshidan ${n} sekund o'tgan bo'lsa , bu ${minut} minutga va ${soat} soatga teng`);
}
misol8(3660);

// /////////////////////      SWITCH CASE

// 1-MISOL: 1-7 gacha butun son berilgan kiritilgan songa mos ravishda hafta kunini so'zlarda ifodolovchi dastur tuzing
function problem1(n){
    switch (n) {
        case 1:
            console.log(`haftaning 1-kuni Dushanba`);
            break;
        case 2:
            console.log(`haftaning 2-kuni Seshanba`);
            break;
        case 3:
            console.log(`haftaning 3-kuni Chorshanba`);
            break;
        case 4:
            console.log(`haftaning 4-kuni Payshanba`);
            break;
        case 5:
            console.log(`haftaning 5-kuni Juma`);
            break;
        case 6:
            console.log(`haftaning 6-kuni Shanba`);
            break;
        case 7:
            console.log(`haftaning 7-kuni Yakshanba`);
            break;
        default:
            console.log('haftada 7 kun bor!!!');
            break;
    }
}
problem1(2)
// 2-MISOL: K butun son berilgan Baho natijalarini chiqaruvchi dastur tuzing. 1-yomon, 2-qoniqarsiz, 3-qoniqarli, 4-yaxshi, 5 - alo
function problem2(baho){
    switch(baho){
        case 1:
            console.log('1-yomon baxo');
            break;
        case 2:
            console.log('2-qoniqarsiz baxo');
            break;
        case 3:
            console.log('3-qoniqarli baxo');
            break;
        case 4:
            console.log('4-yaxshi baxo');
            break;
        case 5:
            console.log('5-alo baxo');
            break;
        default:
            console.log('Baxo 0 dan 5 gacha baxolanadi. ');    
    }
}
problem2(2);
// 3-MISOL:  Oy raqami berilgan Kiritilgan oy qaysi faslga tegishli ekanin chiqaruvchi dastur tuzing. M - s 2 - qish
 
function problem3(oy){
    switch(oy){
        case 1:
            console.log(`${oy}-oy qish fasliga tegishli`);
            break;
        case 2:
            console.log(`${oy}-oy qish fasliga tegishli`);
            break;
        case 3:
            console.log(`${oy}-oy baxor fasliga tegishli`);
            break;
        case 4:
            console.log(`${oy}-oy baxor fasliga tegishli`);
            break;
        case 5:
            console.log(`${oy}-oy baxor fasliga tegishli`);
            break;
        case 6:
            console.log(`${oy}-oy yoz fasliga tegishli`);
            break;
        case 7:
            console.log(`${oy}-oy yoz fasliga tegishli`);
            break;
        case 8:
            console.log(`${oy}-oy yoz fasliga tegishli`);
            break;
        case 9:
            console.log(`${oy}-oy kuz fasliga tegishli`);
            break;
        case 10:
            console.log(`${oy}-oy kuz fasliga tegishli`);
            break;
        case 11:
            console.log(`${oy}-oy kuz fasliga tegishli`);
            break;
        case 12:
            console.log(`${oy}-oy qish fasliga tegishli`);
            break;
        default:
            console.log(`12 ta oy mavjud!`);
            break;
    }

}
problem3(11)
// 4-MISOL: Oy raqami berilgan shu oyda nechta kun borligin aniqlovchi dastur tuzing
function problem4(oy){
    switch(oy){
        case 1:
            console.log(`yanvarda 31 kun bor`);
            break;
        case 2:
            console.log(`fevralda 28 yoki 29 kun bor`);
            break;
        case 3:
            console.log(`martda 31 kun bor`);
            break;
        case 4:
            console.log(`aprelda 30 kun bor`);
            break;
        case 5:
            console.log(`mayda 31 kun bor`);
            break;
        case 6:
            console.log(`iyunda 30 kun bor`);
            break;
        case 7:
            console.log(`iyulda 31 kun bor`);
            break;
        case 8:
            console.log(`avgustda 31 kun bor`);
            break;
        case 9:
            console.log(`sentabrda 30 kun bor`);
            break;
        case 10:
            console.log(`oktabrda 31 kun bor`);
            break;
        case 11:
            console.log(`noyabrda 30 kun bor`);
            break;
        case 12:
            console.log(`dekabrda 31 kun bor`);
            break;
    }
}
problem4(7)
// 5-MISOL: a, b sonlar berilgan c amal ham berilgan a va b sonlar ustida amal bajaruvchi dastur tuzing
function problem5(a,b,holat){
       switch(holat){
        case 1:
            c=a*b;
            console.log(c);
            break;
        case 2:
            c=a+b;
            console.log(c);
            break; 
        case 3:
            c=a/b;
            console.log(c);
            break;   
        default:
            console.log(`bizda hozircha faqat 3 ta holat mavjud, oxirgi songa faqat 1,2,3 kirita olasiz!`);        
       } 
}
problem5(23,2,5)
// 6-MISOL: Bahoga qarab stependiyani aniqlovchi dastur tuzing
function problem6(baxo){
    switch(baxo){
        case 5:
            console.log(`Tabriklaymiz, siz 5 lik stipendiya olasiz!!!`);
            break;    
        case 4:
            console.log(`siz 4 lik stipendiya olasiz!!!`);
            break;    
        case 3:
            console.log(`siz 3 lik stipendiya olasiz!!!`);
            break;    
        case 2:
            console.log(`Afsus, siz stipendiya olmaysiz`);
            break;    
        case 1:
            console.log(`Afsus, siz stipendiya olmaysiz`);
            break;  
        default:
            console.log(`bunday baxo bo'lmaydi`);      
    }
}
problem6(5)


