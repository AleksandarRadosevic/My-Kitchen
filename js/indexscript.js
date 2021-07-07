$(document).ready(function(){
    function findAvg(recipe){
        let sum=0;
        let cnt=0;
        for(let i=0;i<recipe.comments.length;i++){
            if(recipe.comments[i].mark!="/"){
                sum+=parseInt(recipe.comments[i].mark);
                cnt++;
            }
        }
        if(cnt==0)return 0;
        return sum/cnt;
    }
    let users=[{
        username:"jacikot",
        password:"jacikot123",
        name:"Jana Toljaga",
        recipes:[{"id":1,
            "name":"Kajgana sa šunkom",
            "type":"1","difficulty":"2",
            "hour":"0",
            "minute":"15",
            "description":"Barenu šunku iseći što sitnije, pa je izmešati sa kiselom pavlakom i senfom. U dubok tanjir izlupati jaja, posoliti i viljuškom masu penasto umutiti. U izmućena jaja dodati pripremljenu šunku. U plitak tiganj staviti ulje, zatim sipati jaja i šunku i mešati na štednjaku, kao svaku kajganu, ali paziti da ostane ređa, jer je tada ukusnija. Sipati u zdelu i služiti.\n",
            "images":["images/barkani-qica-shunka-gabi1.jpg","images/kajgana-sa-sirom-i-sunkom.jpg","images/omlet-ft-1200x900.jpg"],
            "comments":[],
            "urlVideo":"https://www.youtube.com/embed/e8i_AYcrWjo",
            "owner":"jacikot"
            },
            {
                "id":2,
                "name":"Dimnjeni losos sa pirincem",
                "type":"2",
                "difficulty":"10",
                "hour":"3",
                "minute":"30",
                "description":"Potrebni sastojci za pripremu:\n1 glavica crnog luka\n250 grama pirinča po ukusu\n100 mililitara belog vina\n700 mililitara bujona od povrća\n1 kašika maslaca\n100 grama parmezana\n100 grama dimljenog lososa\nSo i začini po ukusu\nPostupak pripreme:\nCrni luk iseckajte na sitno, pa propržite na malo maslinovog ulja.. Kada zamiriše, dodajte pirinač, pa uz stalno mešanje kratko upržite. Kada zrna postanu staklasta, postepeno sipajte vino. Nastavite sa mešanjem dok vino ne ispari.\nSada postepeno dodajte i bujon, kutlaču po kutlaču, i takodje mešajte. Sada samo povremeno mešajte, a narednu kutlaču bujona sipajte tek kada prethodnu upije pirinač. To će potrajati nekih 15ak minuta, pa kada pirinač upije sav bujon, spreman je.\nSklonite sa ringle pa umešajte puter i parmezan, i dobro promešajte da se sve sjedini. Na kraju dodajte seckani losos pa još jednom promešajte. Probajte, pa po ukusu dodajte začine i poslužite dok je toplo.. Neće biti jednako ukusan ako ga pripremite dosta ranije, jer se pirinač pripremljen na ovakav način služi dok je još topao i kremast..",
                "images":["images/GettyImages-636223280.jpg","images/dimljeni-losos.jpg"],
                "comments":[],
                "urlVideo":"",
                "owner":"jacikot"
            },
            {
                "id":3,
                "name":"Cupavci",
                "type":"3",
                "difficulty":"6",
                "hour":"3",
                "minute":"0",
                "description":"Za biskvit:\n3 jajeta\n200 ml ulja\n200 g šećera\n300 g brašna\n1 kesica praška za pecivo\n100 ml mleka\nUmak od čokolade:\n100 g čokolade za kuvanje\n250 g margarina\n200 ml mleka\n1 čaša šećera\nI još:\n200-250 g kokosa\nPripremiti testo: Od jaja odvojiti belanca i žumanaca. Belance dobro istući mikserom, pa dodati šećer, pa još malo mutiti, dodati žumanca. Smanjiti brznu na mikseru i dodati mleko i ulje. Bršno pomešati sa praškom za pecivo, dodati u masu i lagano promešati kašikom da masa ne padne. Pleh 25x30 cm obložite pek papirom. Pecite biskvit na 200 stepeni dok ne porumeni. Prevrnite na žicu i ostavite da se ohladi.\nOhlađeno testo iseći na kocke. Na šporet u dublju šerpicu staviti margarin da se otopi, dodati čokoladu, kada se sve istopi dodajte šećer, pa mleko i ostavite da provri. Sklonite sa vatre. U činiju sipajte kokos.\nUzmite 2 viljuške, jednom ćete umakati kocke u čokoladu i ostaviti malo na viljušci da okapa čokolada nakon umakanja, a drugom ćete posipati kokos. Ređajte na tacnu i stavite u frižider da se ohladi.\n",
                "images":["images/cupavci-sa-kokosom.jpg","images/Čupavci-scaled.jpg"],
                "comments":[],
                "urlVideo":"https://www.youtube.com/embed/00JmYEIlXuM",
                "owner":"jacikot"
                },
                
            {"id":4,
            "name":"Vocna salata",
            "type":"4",
            "difficulty":"2",
            "hour":"0",
            "minute":"15",
            "description":"Slatku pavlaku umutite u krem. Ne mora da bude čvrst krem kao za ukrašavanje torte, dovoljno je da ga mutite dok ne postane penast. U umućenu pavlaku dodajte mleveni keks i malo narendane korice limuna (nije obavezno, ali lepo miriši). Ostalo voće operite, očistite, ogulite i naseckajte u činiju. Preko voća sipajte sveži sok od limuna i promešajte. Sok od limuna služi da isečeno voće ne bi prebrzo potamnelo, a i daje osvežavajuću kiselinu salati (kao i svaka druga salata treba da bude kisela, zar ne?).\nU činije ili šire čaše na dno stavite kašiku krema od slatke pavlake i keksa. Preko krema stavite voće, a za kraj sve ukrasite kremom ili narendanom koricom limete (ili limuna) ili svežim listićima mente.",
            "images":["images/3640936_20190220220212_5c6dc338b7896802b07a62e4jpeg_ls.jpg","images/brza_vocna_salata.jpg","images/"],
            "comments":[],
            "urlVideo":"https://www.youtube.com/embed/Zp-F68Fa-ps",
            "owner":"jacikot"}

        ]
    },{
        username:"aca",
        password:"aca123",
        name:"Aleksandar Radosevic",
        recipes:[
            {"id":5,"name":"Sarma","type":"2","difficulty":"8","hour":"2","minute":"45","description":"Na ulju propržite iseckan crni i beli luk i rendanu šargarepu. Kada povrće bude uprženo, dodajte meso, polovinu slanine iseckanu na kockice i propržite. Začinite solju i mlevenim biberom i dodajte pirinač i pola kašike začinske paprike. Sve dobro promešajte i po kašiku fila stavljajte na list kupusa i uvijte sarmu . Birajte manje glavice kupusa da bi i listovi bili manji i sarma lepše izgledala.\nNa dno dubljeg suda stavite malo kupusa, a zatim ređajte sarme. Kada sve složite,  preostalu slaninu stavite preko sarme.\nKašiku začinske paprike, biber u zrnu i lovor stavite preko sarme. Pokrijte listovima kupusa i nalijte vodom da pređe preko sarme oko 2 prsta. Stavite poklopac i ostavite da provri, a zatim smanjite temperature i lagano krčkajte 3-4 sata.","images":["images/1600x900_sarma.jpg","images/sarma-rolnice.jpg","images/sarma_sa_dimljenom_ribom_ukusno_jelo_bez_mesa_od_kiselog_kupusa_recept_792893640.jpg"],"comments":[],"urlVideo":"","owner":"aca"},
            {"id":6,"name":"Musaka","type":"2","difficulty":"8","hour":"3","minute":"15","description":"Na ulju upržite sitno naseckan luk, dodajte mu mleveno meso i pržite sve zajedno mešajući povremeno 5-10 minuta. Na kraju krupno narendajte šargarepu, posolite i začinite svim spremljenim začinima. Izmešajte dobro sve zajedno. \nKrompir oljuštite i nasecite na tanke pločice. Na dno nauljene posude poredjajte polovinu pripremljenog krompira, malo ga posolite pa preko krompira rasporedite nadev od mlevenog mesa. Prekrijte meso ostatkom krompira pa sve prelijte mešavinom mleka, vode i jaja. Dosolite, pospite peršunom i zalijte uljem, pa pecite u ugrejanoj rerni 45 minuta na 230 stepeni. ","images":["images/49796_Musaka.jpg","images/download.jpg","images/musaka-od-krompira-700x400.jpeg"],"comments":[],"urlVideo":"https://www.youtube.com/embed/56DhVJpN9zk","owner":"aca"},
            {"id":7,"name":"Dobos torta","type":"3","difficulty":"6","hour":"4","minute":"0","description":"Čokoladni krem:\n5 jaja\n250 g šećera\n125 g čokolade za kuvanje\n320 g putera, na sobnoj temperaturi\nUmutite jaja penasto sa šećerom. Ovu smesu kuvajte na pari dok se ne zgusne. Dodajte čokoladu, dobro promešajte i kuvajte još oko 2-3 minuta. Sklonite sa vatre i ostavite da se potpuno ohladi. Dodajte puter pa izmiksajte. Ostavite u frižideru dok pripremate kore.\nKore:\n6 jaja\n6 kašika šećera\n7 kašika brašna\nBelanca umutite u čvrst sneg. Pred kraj mućenja dodajte i šećer i mutite dok nije čvrsto. Zatim umešajte jedno po jedno žumance, i na kraju i brašno.\nIzmerite smesu i podelite je na 10 delova. Zagrejte rernu na 200°C. Od papira za pečenje isecite 10 krugova prečnika 20 cm. Za svaku koru je potrebno da kalup za tortu prečnika 20 cm obložite papirom, malo papir namažete puterom i sipate 1/10 umućene smese i pečete, 5-6 minuta ili dok nije gotovo. Svaku koru pokrijte vlažnom krpom. Poslednju koru isecite na 16 jednakih delova i delove poslažite na veliki pleh od rerne tako da su razdvojeni jedan od drugog.\nKaramel:\n200 g šećera\n2 kašike putera\n2 kašike soka od limuna\nKaramelizujte šećer na jakoj vatri. Kada počne da tamni, sklonite ga i umešajte puter i sok od limuna. Izmešajte dobro, vratite na vatru i kuvajte dok se skroz ne otopi. Prelijte preko onih 16 isečenih delova.\nSklapanje torte\nKora, fil, kora… I tako dok ne potrošite sastojke. Ostavite nešto krema za kasnije i time namažite složenu tortu. Ako ste se odlučili za karamel dekoraciju, špricem istisnite manje količine krema po površini torte, oko ivice. Potrebno vam je 16 gomilica na koje ćete, malo ukoso, staviti karamel pločice.","images":["images/55250_dobos-torta_ls.jpg"],"comments":[],"urlVideo":"https://www.youtube.com/embed/c2OhEuL103U","owner":"aca"},
            {"id":8,"name":"Bajadera","type":"3","difficulty":"5","hour":"2","minute":"30","description":"U posudu na štednjaku sipati vodu, te dodati margarin narezan na manje komade, šećer i vanilin šećer.\nSve zagrijavati uz miješanje da se sastojci otope.\nU veliku posudu sipati mljevene kekse i mljevene orahe pa ih izmiješati.\nNapraviti u njima malu rupu, te u nju sipati otopljene sastojke.\nKuhačom sve dobro izmiješati da se dobije fina ujednačena smjesa.\nPomoću vage (ili odokativno) podijeliti smjesu na dva jednaka dijela.\nIstopiti čokoladu za kuhanje i sipati u jednu polovicu smjese.\nI tu smjesu izmiješati pomoću kuhače da postane jednolična.\nProtvan dimenzija 35x20 centimetara namazati uljem.\nNa dno prvo staviti čokoladni (tamniji) sloj te ga gladilicom dobro izravnati.\nNanijeti svijetli sloj na tamni i oprezno ga rasporediti i zagladiti.\nZa glazuru na pari otopiti čokoladu za kuhanje s uljem i sipati po svijetlom sloju.\nOvo je potpuno tekuće pa se ne morate bojati da ste nešto napravili krivo.\nKolač ide na hlađenje u frižider preko noći prije rezanja i posluživanja.\nRezati na pravokutnike prema želji, naše bajadere su dimenzija 4x2 centimetra.","images":["images/bajadera-recipe.jpg","images/1-113.jpg","images/bajadera.jpg"],"comments":[],"urlVideo":"https://www.youtube.com/embed/DBiYu4nEFHs","owner":"aca"},
        ]
    },
    {
            username:"user",
            password:"user123",
            name:"User Useric",
            recipes:[
                {"id":9,"name":"Borscht","type":"1","difficulty":"5","hour":"2","minute":"0","description":"Borscht is a traditional soup hailing from Russia and Eastern Europe. It wouldn’t be borscht without beets and some kind of souring ingredient such as wine vinegar or lemon juice. It almost always has shredded cabbage too.\nBeyond that, ingredients can vary widely with the addition of beans among many other ingredients (Russian borscht usually includes beef). I include carrots and potatoes and use vegetable stock (although chicken or beef stock will work).\nMaking borscht is a simple process, simply chop and simmer!\n\nSauté the beets and other vegetables in oil.\nAdd the vegetable broth and simmer\nStir in lemon juice and zest and serve hot.\nSwirl in a dollop of sour cream in each bowl. The fat in the cream helps balance the acidity of the soup and provides some richness and body. Serve borscht as an appetizer with dinner, or as a light meal with a side of corn muffins, soda bread, or cheese biscuits.","images":["images/download (1).jpg","images/190226-borscht-137-1552084904.jpg","images/Borscht-Recipe-2.jpg"],"comments":[],"urlVideo":"https://www.youtube.com/embed/khPQAStXKDc","owner":"user"},
                {"id":10,"name":"Lasagna","type":"1","difficulty":"4","hour":"1","minute":"15","description":"In a Dutch oven, cook sausage, ground beef, onion, and garlic over medium heat until well browned. Stir in crushed tomatoes, tomato paste, tomato sauce, and water. Season with sugar, basil, fennel seeds, Italian seasoning, 1 teaspoon salt, pepper, and 2 tablespoons parsley. Simmer, covered, for about 1 1/2 hours, stirring occasionally. Bring a large pot of lightly salted water to a boil. Cook lasagna noodles in boiling water for 8 to 10 minutes. Drain noodles, and rinse with cold water. In a mixing bowl, combine ricotta cheese with egg, remaining parsley, and 1/2 teaspoon salt. To assemble, spread 1 1/2 cups of meat sauce in the bottom of a 9x13-inch baking dish. Arrange 6 noodles lengthwise over meat sauce. Spread with one half of the ricotta cheese mixture. Top with a third of mozzarella cheese slices. Spoon 1 1/2 cups meat sauce over mozzarella, and sprinkle with 1/4 cup Parmesan cheese. Repeat layers, and top with remaining mozzarella and Parmesan cheese. Cover with foil: to prevent sticking, either spray foil with cooking spray, or make sure the foil does not touch the cheese.","images":["images/download.jpg","images/Easiest-Lasagna-EverIMG_0217.jpg","images/meat-lasagna-1200.jpg"],"comments":[],"urlVideo":"","owner":"user"},
                {"id":11,"name":"Vanilla ice cream","type":"4","difficulty":"2","hour":"0","minute":"10","description":"Stir sugar, cream, and milk into a saucepan over low heat until sugar has dissolved. Heat just until mix is hot and a small ring of foam appears around the edge. Transfer cream mixture to a pourable container such as a large measuring cup. Stir in vanilla extract and chill mix thoroughly, at least 2 hours. (Overnight is best.) Pour cold ice cream mix into an ice cream maker, turn on the machine, and churn according to manufacturer's directions, 20 to 25 minutes. When ice cream is softly frozen, serve immediately or place a piece of plastic wrap directly on the ice cream and place in freezer to ripen, 2 to 3 hours.","images":["images/download (2).jpg","images/Best-Vanilla-Bean-Ice-Cream-010-720x540.jpg","images/Vanilla-ice-cream-recipe-cherry-compote-4.jpg"],"comments":[],"urlVideo":"https://www.youtube.com/embed/U_xVoZFZTBs","owner":"user"},
                {"id":12,"name":"Smoothie","type":"4","difficulty":"2","hour":"0","minute":"10","description":"This fruit smoothie is all about flavor and color: the beautiful bright pink pops with the promise of all the tasty ingredients within. It’s a plant based and vegan fruit smoothie that’s heavy on the fruit. Here are the ingredients you’ll need for this fruit smoothie:\n\nFrozen mixed berries: You can use berries of any kind: try to find the mix of blueberries, blackberries, and strawberries sold in the frozen section.\nGreen apple: Green apple features in many of our smoothie recipes (like our Spinach Smoothie and Green Smoothie) because it’s full of sweet tart flavor and helps add texture.\nBanana: Banana is almost integral to most smoothies: it adds the best creamy texture!\nFrozen mango or pineapple: You can use either: these frozen fruits add necessary sweetness to the berries.\nIce: You’ve got to throw in a little ice for the perfect fluffy smoothie texture.\nLemon juice: Lemon juice brings a brightness to the flavors.\nMaple syrup, honey or agave syrup: It’s optional, but it makes for just the right sweetness.","images":["images/Creamy-Watermelon-Smoothie.jpg","images/delish-how-to-make-a-smoothie-horizontal-1542310071.png","images/frozen-fruit-smoothie-3.jpg","images/how-to-make-a-smoothie-22-1200.jpg"],"comments":[],"urlVideo":"","owner":"user"}
            
            ]
    }
    ];
    let recipes=[
        {"id":1,
        "name":"Kajgana sa šunkom",
        "type":"1","difficulty":"2",
        "hour":"0",
        "minute":"15",
        "description":"Barenu šunku iseći što sitnije, pa je izmešati sa kiselom pavlakom i senfom. U dubok tanjir izlupati jaja, posoliti i viljuškom masu penasto umutiti. U izmućena jaja dodati pripremljenu šunku. U plitak tiganj staviti ulje, zatim sipati jaja i šunku i mešati na štednjaku, kao svaku kajganu, ali paziti da ostane ređa, jer je tada ukusnija. Sipati u zdelu i služiti.\n",
        "images":["images/barkani-qica-shunka-gabi1.jpg","images/kajgana-sa-sirom-i-sunkom.jpg","images/omlet-ft-1200x900.jpg"],
        "comments":[],
        "urlVideo":"https://www.youtube.com/embed/e8i_AYcrWjo",
        "owner":"jacikot"
        },
        {
            "id":2,
            "name":"Dimnjeni losos sa pirincem",
            "type":"2",
            "difficulty":"10",
            "hour":"3",
            "minute":"30",
            "description":"Potrebni sastojci za pripremu:\n1 glavica crnog luka\n250 grama pirinča po ukusu\n100 mililitara belog vina\n700 mililitara bujona od povrća\n1 kašika maslaca\n100 grama parmezana\n100 grama dimljenog lososa\nSo i začini po ukusu\nPostupak pripreme:\nCrni luk iseckajte na sitno, pa propržite na malo maslinovog ulja.. Kada zamiriše, dodajte pirinač, pa uz stalno mešanje kratko upržite. Kada zrna postanu staklasta, postepeno sipajte vino. Nastavite sa mešanjem dok vino ne ispari.\nSada postepeno dodajte i bujon, kutlaču po kutlaču, i takodje mešajte. Sada samo povremeno mešajte, a narednu kutlaču bujona sipajte tek kada prethodnu upije pirinač. To će potrajati nekih 15ak minuta, pa kada pirinač upije sav bujon, spreman je.\nSklonite sa ringle pa umešajte puter i parmezan, i dobro promešajte da se sve sjedini. Na kraju dodajte seckani losos pa još jednom promešajte. Probajte, pa po ukusu dodajte začine i poslužite dok je toplo.. Neće biti jednako ukusan ako ga pripremite dosta ranije, jer se pirinač pripremljen na ovakav način služi dok je još topao i kremast..",
            "images":["images/GettyImages-636223280.jpg","images/dimljeni-losos.jpg"],
            "comments":[],
            "urlVideo":"",
            "owner":"jacikot"
        },
        {
            "id":3,
            "name":"Cupavci",
            "type":"3",
            "difficulty":"6",
            "hour":"3",
            "minute":"0",
            "description":"Za biskvit:\n3 jajeta\n200 ml ulja\n200 g šećera\n300 g brašna\n1 kesica praška za pecivo\n100 ml mleka\nUmak od čokolade:\n100 g čokolade za kuvanje\n250 g margarina\n200 ml mleka\n1 čaša šećera\nI još:\n200-250 g kokosa\nPripremiti testo: Od jaja odvojiti belanca i žumanaca. Belance dobro istući mikserom, pa dodati šećer, pa još malo mutiti, dodati žumanca. Smanjiti brznu na mikseru i dodati mleko i ulje. Bršno pomešati sa praškom za pecivo, dodati u masu i lagano promešati kašikom da masa ne padne. Pleh 25x30 cm obložite pek papirom. Pecite biskvit na 200 stepeni dok ne porumeni. Prevrnite na žicu i ostavite da se ohladi.\nOhlađeno testo iseći na kocke. Na šporet u dublju šerpicu staviti margarin da se otopi, dodati čokoladu, kada se sve istopi dodajte šećer, pa mleko i ostavite da provri. Sklonite sa vatre. U činiju sipajte kokos.\nUzmite 2 viljuške, jednom ćete umakati kocke u čokoladu i ostaviti malo na viljušci da okapa čokolada nakon umakanja, a drugom ćete posipati kokos. Ređajte na tacnu i stavite u frižider da se ohladi.\n",
            "images":["images/cupavci-sa-kokosom.jpg","images/Čupavci-scaled.jpg"],
            "comments":[],
            "urlVideo":"https://www.youtube.com/embed/00JmYEIlXuM",
            "owner":"jacikot"
            },
            {"id":4,
            "name":"Vocna salata",
            "type":"4",
            "difficulty":"2",
            "hour":"0",
            "minute":"15",
            "description":"Slatku pavlaku umutite u krem. Ne mora da bude čvrst krem kao za ukrašavanje torte, dovoljno je da ga mutite dok ne postane penast. U umućenu pavlaku dodajte mleveni keks i malo narendane korice limuna (nije obavezno, ali lepo miriši). Ostalo voće operite, očistite, ogulite i naseckajte u činiju. Preko voća sipajte sveži sok od limuna i promešajte. Sok od limuna služi da isečeno voće ne bi prebrzo potamnelo, a i daje osvežavajuću kiselinu salati (kao i svaka druga salata treba da bude kisela, zar ne?).\nU činije ili šire čaše na dno stavite kašiku krema od slatke pavlake i keksa. Preko krema stavite voće, a za kraj sve ukrasite kremom ili narendanom koricom limete (ili limuna) ili svežim listićima mente.",
            "images":["images/3640936_20190220220212_5c6dc338b7896802b07a62e4jpeg_ls.jpg","images/brza_vocna_salata.jpg"],
            "comments":[],
            "urlVideo":"https://www.youtube.com/embed/Zp-F68Fa-ps",
            "owner":"jacikot"},
            {"id":5,"name":"Sarma","type":"2","difficulty":"8","hour":"2","minute":"45","description":"Na ulju propržite iseckan crni i beli luk i rendanu šargarepu. Kada povrće bude uprženo, dodajte meso, polovinu slanine iseckanu na kockice i propržite. Začinite solju i mlevenim biberom i dodajte pirinač i pola kašike začinske paprike. Sve dobro promešajte i po kašiku fila stavljajte na list kupusa i uvijte sarmu . Birajte manje glavice kupusa da bi i listovi bili manji i sarma lepše izgledala.\nNa dno dubljeg suda stavite malo kupusa, a zatim ređajte sarme. Kada sve složite,  preostalu slaninu stavite preko sarme.\nKašiku začinske paprike, biber u zrnu i lovor stavite preko sarme. Pokrijte listovima kupusa i nalijte vodom da pređe preko sarme oko 2 prsta. Stavite poklopac i ostavite da provri, a zatim smanjite temperature i lagano krčkajte 3-4 sata.","images":["images/1600x900_sarma.jpg","images/sarma-rolnice.jpg","images/sarma_sa_dimljenom_ribom_ukusno_jelo_bez_mesa_od_kiselog_kupusa_recept_792893640.jpg"],"comments":[],"urlVideo":"","owner":"aca"},
            {"id":6,"name":"Musaka","type":"2","difficulty":"8","hour":"3","minute":"15","description":"Na ulju upržite sitno naseckan luk, dodajte mu mleveno meso i pržite sve zajedno mešajući povremeno 5-10 minuta. Na kraju krupno narendajte šargarepu, posolite i začinite svim spremljenim začinima. Izmešajte dobro sve zajedno. \nKrompir oljuštite i nasecite na tanke pločice. Na dno nauljene posude poredjajte polovinu pripremljenog krompira, malo ga posolite pa preko krompira rasporedite nadev od mlevenog mesa. Prekrijte meso ostatkom krompira pa sve prelijte mešavinom mleka, vode i jaja. Dosolite, pospite peršunom i zalijte uljem, pa pecite u ugrejanoj rerni 45 minuta na 230 stepeni. ","images":["images/49796_Musaka.jpg","images/download.jpg","images/musaka-od-krompira-700x400.jpeg"],"comments":[],"urlVideo":"https://www.youtube.com/embed/56DhVJpN9zk","owner":"aca"},
            {"id":7,"name":"Dobos torta","type":"3","difficulty":"6","hour":"4","minute":"0","description":"Čokoladni krem:\n5 jaja\n250 g šećera\n125 g čokolade za kuvanje\n320 g putera, na sobnoj temperaturi\nUmutite jaja penasto sa šećerom. Ovu smesu kuvajte na pari dok se ne zgusne. Dodajte čokoladu, dobro promešajte i kuvajte još oko 2-3 minuta. Sklonite sa vatre i ostavite da se potpuno ohladi. Dodajte puter pa izmiksajte. Ostavite u frižideru dok pripremate kore.\nKore:\n6 jaja\n6 kašika šećera\n7 kašika brašna\nBelanca umutite u čvrst sneg. Pred kraj mućenja dodajte i šećer i mutite dok nije čvrsto. Zatim umešajte jedno po jedno žumance, i na kraju i brašno.\nIzmerite smesu i podelite je na 10 delova. Zagrejte rernu na 200°C. Od papira za pečenje isecite 10 krugova prečnika 20 cm. Za svaku koru je potrebno da kalup za tortu prečnika 20 cm obložite papirom, malo papir namažete puterom i sipate 1/10 umućene smese i pečete, 5-6 minuta ili dok nije gotovo. Svaku koru pokrijte vlažnom krpom. Poslednju koru isecite na 16 jednakih delova i delove poslažite na veliki pleh od rerne tako da su razdvojeni jedan od drugog.\nKaramel:\n200 g šećera\n2 kašike putera\n2 kašike soka od limuna\nKaramelizujte šećer na jakoj vatri. Kada počne da tamni, sklonite ga i umešajte puter i sok od limuna. Izmešajte dobro, vratite na vatru i kuvajte dok se skroz ne otopi. Prelijte preko onih 16 isečenih delova.\nSklapanje torte\nKora, fil, kora… I tako dok ne potrošite sastojke. Ostavite nešto krema za kasnije i time namažite složenu tortu. Ako ste se odlučili za karamel dekoraciju, špricem istisnite manje količine krema po površini torte, oko ivice. Potrebno vam je 16 gomilica na koje ćete, malo ukoso, staviti karamel pločice.","images":["images/55250_dobos-torta_ls.jpg"],"comments":[],"urlVideo":"https://www.youtube.com/embed/c2OhEuL103U","owner":"aca"},
            {"id":8,"name":"Bajadera","type":"3","difficulty":"5","hour":"2","minute":"30","description":"U posudu na štednjaku sipati vodu, te dodati margarin narezan na manje komade, šećer i vanilin šećer.\nSve zagrijavati uz miješanje da se sastojci otope.\nU veliku posudu sipati mljevene kekse i mljevene orahe pa ih izmiješati.\nNapraviti u njima malu rupu, te u nju sipati otopljene sastojke.\nKuhačom sve dobro izmiješati da se dobije fina ujednačena smjesa.\nPomoću vage (ili odokativno) podijeliti smjesu na dva jednaka dijela.\nIstopiti čokoladu za kuhanje i sipati u jednu polovicu smjese.\nI tu smjesu izmiješati pomoću kuhače da postane jednolična.\nProtvan dimenzija 35x20 centimetara namazati uljem.\nNa dno prvo staviti čokoladni (tamniji) sloj te ga gladilicom dobro izravnati.\nNanijeti svijetli sloj na tamni i oprezno ga rasporediti i zagladiti.\nZa glazuru na pari otopiti čokoladu za kuhanje s uljem i sipati po svijetlom sloju.\nOvo je potpuno tekuće pa se ne morate bojati da ste nešto napravili krivo.\nKolač ide na hlađenje u frižider preko noći prije rezanja i posluživanja.\nRezati na pravokutnike prema želji, naše bajadere su dimenzija 4x2 centimetra.","images":["images/bajadera-recipe.jpg","images/1-113.jpg","images/bajadera.jpg"],"comments":[],"urlVideo":"https://www.youtube.com/embed/DBiYu4nEFHs","owner":"aca"},
            {"id":9,"name":"Borscht","type":"1","difficulty":"5","hour":"2","minute":"0","description":"Borscht is a traditional soup hailing from Russia and Eastern Europe. It wouldn’t be borscht without beets and some kind of souring ingredient such as wine vinegar or lemon juice. It almost always has shredded cabbage too.\nBeyond that, ingredients can vary widely with the addition of beans among many other ingredients (Russian borscht usually includes beef). I include carrots and potatoes and use vegetable stock (although chicken or beef stock will work).\nMaking borscht is a simple process, simply chop and simmer!\n\nSauté the beets and other vegetables in oil.\nAdd the vegetable broth and simmer\nStir in lemon juice and zest and serve hot.\nSwirl in a dollop of sour cream in each bowl. The fat in the cream helps balance the acidity of the soup and provides some richness and body. Serve borscht as an appetizer with dinner, or as a light meal with a side of corn muffins, soda bread, or cheese biscuits.","images":["images/download (1).jpg","images/190226-borscht-137-1552084904.jpg","images/Borscht-Recipe-2.jpg"],"comments":[],"urlVideo":"https://www.youtube.com/embed/khPQAStXKDc","owner":"user"},
            {"id":10,"name":"Lasagna","type":"1","difficulty":"4","hour":"1","minute":"15","description":"In a Dutch oven, cook sausage, ground beef, onion, and garlic over medium heat until well browned. Stir in crushed tomatoes, tomato paste, tomato sauce, and water. Season with sugar, basil, fennel seeds, Italian seasoning, 1 teaspoon salt, pepper, and 2 tablespoons parsley. Simmer, covered, for about 1 1/2 hours, stirring occasionally. Bring a large pot of lightly salted water to a boil. Cook lasagna noodles in boiling water for 8 to 10 minutes. Drain noodles, and rinse with cold water. In a mixing bowl, combine ricotta cheese with egg, remaining parsley, and 1/2 teaspoon salt. To assemble, spread 1 1/2 cups of meat sauce in the bottom of a 9x13-inch baking dish. Arrange 6 noodles lengthwise over meat sauce. Spread with one half of the ricotta cheese mixture. Top with a third of mozzarella cheese slices. Spoon 1 1/2 cups meat sauce over mozzarella, and sprinkle with 1/4 cup Parmesan cheese. Repeat layers, and top with remaining mozzarella and Parmesan cheese. Cover with foil: to prevent sticking, either spray foil with cooking spray, or make sure the foil does not touch the cheese.","images":["images/download.jpg","images/Easiest-Lasagna-EverIMG_0217.jpg","images/meat-lasagna-1200.jpg"],"comments":[],"urlVideo":"","owner":"user"},
            {"id":11,"name":"Vanilla ice cream","type":"4","difficulty":"2","hour":"0","minute":"10","description":"Stir sugar, cream, and milk into a saucepan over low heat until sugar has dissolved. Heat just until mix is hot and a small ring of foam appears around the edge. Transfer cream mixture to a pourable container such as a large measuring cup. Stir in vanilla extract and chill mix thoroughly, at least 2 hours. (Overnight is best.) Pour cold ice cream mix into an ice cream maker, turn on the machine, and churn according to manufacturer's directions, 20 to 25 minutes. When ice cream is softly frozen, serve immediately or place a piece of plastic wrap directly on the ice cream and place in freezer to ripen, 2 to 3 hours.","images":["images/download (2).jpg","images/Best-Vanilla-Bean-Ice-Cream-010-720x540.jpg","images/Vanilla-ice-cream-recipe-cherry-compote-4.jpg"],"comments":[],"urlVideo":"https://www.youtube.com/embed/U_xVoZFZTBs","owner":"user"},
            {"id":12,"name":"Smoothie","type":"4","difficulty":"2","hour":"0","minute":"10","description":"This fruit smoothie is all about flavor and color: the beautiful bright pink pops with the promise of all the tasty ingredients within. It’s a plant based and vegan fruit smoothie that’s heavy on the fruit. Here are the ingredients you’ll need for this fruit smoothie:\n\nFrozen mixed berries: You can use berries of any kind: try to find the mix of blueberries, blackberries, and strawberries sold in the frozen section.\nGreen apple: Green apple features in many of our smoothie recipes (like our Spinach Smoothie and Green Smoothie) because it’s full of sweet tart flavor and helps add texture.\nBanana: Banana is almost integral to most smoothies: it adds the best creamy texture!\nFrozen mango or pineapple: You can use either: these frozen fruits add necessary sweetness to the berries.\nIce: You’ve got to throw in a little ice for the perfect fluffy smoothie texture.\nLemon juice: Lemon juice brings a brightness to the flavors.\nMaple syrup, honey or agave syrup: It’s optional, but it makes for just the right sweetness.","images":["images/Creamy-Watermelon-Smoothie.jpg","images/delish-how-to-make-a-smoothie-horizontal-1542310071.png","images/frozen-fruit-smoothie-3.jpg","images/how-to-make-a-smoothie-22-1200.jpg"],"comments":[],"urlVideo":"","owner":"user"}
        ];
    
    if(localStorage.getItem("recipes")==null){
        localStorage.setItem("recipes",JSON.stringify(recipes));
    }
    else recipes=JSON.parse(localStorage.getItem("recipes"));
    recipes.sort((r1,r2)=>findAvg(r2)-findAvg(r1));

    if(localStorage.getItem("users")==null){
        localStorage.setItem("users",JSON.stringify(users));
        localStorage.setItem("current","");
    }
    else users=JSON.parse(localStorage.getItem("users"));
    if(localStorage.getItem("current")!=""&&localStorage.getItem("current")!=null){
        let name=JSON.parse(localStorage.getItem("current")).name;
        $(".navbar-nav>li:nth-child(2)").after(
            "<li class='nav-item dropdown'>"+
            "<a class='nav-link dropdown-toggle' href='#' id='acc' data-toggle='dropdown'>Moj nalog</a>"+
            "<div class='dropdown-menu' aria-labelledby='acc'>"+
            "<a class='dropdown-item' href='myRecipes.html' id='myrec'>Moji recepti</a>"+
            "<a class='dropdown-item' href='commentsMarks.html' id='comm'>Komentari i ocene</a>"+
            "<a class='dropdown-item' href='#' id='logout'>Odjavi se</a></div></li>"
            );      
        $(".navbar-nav>li:nth-child(1)").after("<li class='nav-item'><a id='addR' class='nav-link' href='addRecipe.html' >Dodaj recept</a></li>");
        $(".reglog").hide();
        $(".welcome").html(name+",<div id='welcome'></div>");
    } 
    else  {
        $(".reglog").show();
        $(".welcome").html("<div id='welcome'></div>");
    }

    $("#login").click(function(){
        $("#perror").text("");
        $("#uerror").text("");
        let username=$("#username").val();
        let pass=$("#password").val();
        let end=false;
        if(username==""){
            $("#uerror").text("Niste uneli korisnicko ime");
            end=true;

        }
        if(pass==""){
            $("#perror").text("Niste uneli lozinku");
            end=true;
        }
        if(end)return;
        let user=users.find(user=>user.username==username);
        if(user==null)$("#uerror").text("Korisnik sa datim korisnickim imenom ne postoji");
        else {
            if(user.password!=pass) $("#perror").text("Korisnicka lozinka nije ispravna");
            else{
                localStorage.setItem("current",JSON.stringify(user));
                window.location.href="index.html";

            }
        }

    });


    $("#register").click(function(){
        $("#perrorReg").text("");
        $("#uerrorReg").text("");
        $("#nerrorReg").text("");
        $("#cperrorReg").text("");
        let usrname=$("#usernameReg").val();
        let pass=$("#passwordReg").val();
        let ns=$("#nameReg").val();
        let confirm=$("#cpasswordReg").val();
        let end=false;
        if(usrname==""){
            $("#uerrorReg").text("Niste uneli korisnicko ime");
            end=true;

        }
        if(pass==""){
            $("#perrorReg").text("Niste uneli lozinku");
            end=true;
        }

        if(ns==""){
            $("#nerrorReg").text("Niste uneli ime i prezime");
            end=true;
        }
        if(confirm==""){
            $("#cperrorReg").text("Niste uneli potvrdu lozinke");
            end=true;
        }
        if(end)return;
        if(usrname.length<6){
            $("#uerrorReg").text("Korisnicko ime mora biti duze od 6 karaktera");
            return;
        }
        if(pass.length<6){
            $("#perrorReg").text("Lozinka mora biti duza od 6 karaktera");
            return;
        }
        let user=users.find(user=>user.username==usrname);
        if(user!=null)$("#uerrorReg").text("Korisnik sa datim korisnickim imenom vec postoji");
        else {
            if(pass!=confirm){
                $("#cperrorReg").text("Sifre se ne poklapaju");
                
            }
            else{
                let user={
                    username:usrname,
                    password:pass,
                    name:ns,
                    recipes:[]
                };
                users.push(user);
                localStorage.setItem("users",JSON.stringify(users));
                localStorage.setItem("current",JSON.stringify(user));
                window.location.href="index.html";
            }
        }

    });



    $("#logout").on("click",function(){

        users="";
        localStorage.setItem("current","");
        window.location.href="index.html";
    });
   
    if(recipes.length>=3){
        $("#best").append($("<div class='col-sm-12 col-md-4 col-lg-4'></div>").append($("<a class='lightbox'></a>").click(function(){
                    localStorage.setItem("currentRecipe",JSON.stringify(recipes[0]));
                    window.location.href="blog-details.html";
                }).append("<img class='img-fluid img_index'  src='"+recipes[0].images[0]+"' alt='Gallery Images'>")).append("<h1 class='text-center'>"+recipes[0].name+"</h1>"))
                .append($("<div class='col-sm-6 col-md-4 col-lg-4'></div>").append($("<a class='lightbox'></a>").click(function(){
                    localStorage.setItem("currentRecipe",JSON.stringify(recipes[1]));
                    window.location.href="blog-details.html";
                }).append("<img class='img-fluid img_index' src='"+recipes[1].images[0]+"' alt='Gallery Images'>")).append("<h1 class='text-center'>"+recipes[1].name+"</h1>"))
                .append($("<div class='col-sm-6 col-md-4 col-lg-4'></div>").append($("<a class='lightbox'></a>").click(function(){
                    localStorage.setItem("currentRecipe",JSON.stringify(recipes[2]));
                    window.location.href="blog-details.html";
                }).append("<img class='img-fluid img_index' height='500px' src='"+recipes[2].images[0]+"' alt='Gallery Images'>")).append("<h1 class='text-center'>"+recipes[2].name+"</h1>"));
    }
    

   
});
