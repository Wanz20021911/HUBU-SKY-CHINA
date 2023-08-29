window.onload = (event) => {
    document.getElementById("imgHeader").style.width = document.getElementById("headerImg").offsetWidth + "px";
  };

  addEventListener('resize', function () {
    document.getElementById("imgHeader").style.width = document.getElementById("headerImg").offsetWidth + "px";
  });


  const prev = document.querySelector('.prev');
  const next = document.querySelector('.next');

  const track = document.querySelector('.track');

  let carouselHeight = document.querySelector('.carousel-container').offsetHeight;

  window.addEventListener('resize', () => {
    carouselHeight = document.querySelector('.carousel-container').offsetHeight;
  })

  let index = 0;

  next.addEventListener('click', () => {
    index++;
    prev.classList.add('show');
    track.style.transform = `translateY(-${index * carouselHeight}px)`;

    if (track.offsetHeight - (index * carouselHeight) < -2*carouselHeight) { //一个0解决所有
      next.classList.add('hide');
    }
  })

  prev.addEventListener('click', () => {
    index--;
    next.classList.remove('hide');
    if (index === 0) {
      prev.classList.remove('show');
    }
    track.style.transform = `translateY(-${index * carouselHeight}px)`;
  })

  function changeName(name) {
    document.getElementById("mNameID").innerHTML = name;
    document.getElementById("mPicID").src = memberInfo[name][1];
    document.getElementById("mRoleID").innerHTML = memberInfo[name][2];
    document.getElementById("mBioID").innerHTML = memberInfo[name][0];

    // Update number of sleep
    var sleepNumber = memberInfo[name][3]
    $("#allCircles div").parent().find('div').removeClass("closedCircle");
    for (let i = 0; i < sleepNumber; i++) {
      document.getElementById("circle" + (i + 1)).classList.add('closedCircle');
    }
  }

  var memberInfo = {
    "Huang Ziyue":
      ["Hello friends, my name is Huang Ziyue.A Student, majoring in ideological and political education, is mainly responsible for social practice and team propaganda in our team, a big family with friendship, unity and a clear division of labor. Even if there are many difficulties, courage is essential. I hope that with the joint efforts of everyone, we will pass the difficult pass. Although the road ahead is long, it is still full of hope.", "https://static.igem.wiki/teams/4245/wiki/shrunkmemberimages/sahana.png", "STUDENT"],

    "Song Yiqian":
      ["Hello everyone, my name is Song Yiqian!A student majoring in biological sciences at Hubei University. She is responsible for the team's artistic design.This is her first time participating in the IGEM competition. The close contact within our team during the preparation process enhanced my cooperation and communication skills, and at the same time, I learned a lot about web and video production, and gained a lot.", "https://static.igem.wiki/teams/4245/wiki/shrunkmemberimages/rick.png", "STUDENT"],

    "Fang Yi":
      ["Hi everyone! My name is Fang Yi.A student majoring in English Education.In the team, she is mainly responsible for the translation of relevant texts, as well as the English dubbing in the videos produced by the team. By participating in this IGEM activity, on the one hand, I enriched my understanding of relevant biological knowledge and realized the practical significance of our team's research products. On the other hand, this activity also allowed me to get to know each other more and more through cooperation and communication with various members of the team, and cultivated a deeper friendship. ", "https://static.igem.wiki/teams/4245/wiki/shrunkmemberimages/varnica-green-1-22.png", "STUDENT", "6"],

    "Lu Zixin":
      ["Hey everyone!I am Lu Zixin, majoring in ideological and political education in Hubei University. I am the leader of the social practice group in the team. Although I am a liberal arts student, I have learned a lot in IGEM and gained a lot. The captain is very good and the team members are great while the project is very fantastic and the future is promising.", "https://static.igem.wiki/teams/4245/wiki/shrunkmemberimages/suhayb.png", "STUDENT", "6"],

    "Hu Lijuan":
      ["Hey everyone!I am Hu Lijuan, a student majoring in biotechnology in College of Life Sciences in Hubei University. In the team, she is a member of the experimental group and is indispensable. She is serious and responsible, love life, and dare to challenge. Through this activity, I learned many experimental techniques. “Born ordinary, but not willing to be mediocre.", "https://static.igem.wiki/teams/4245/wiki/shrunkmemberimages/michelle.png", "STUDENT", "2"],

    "Tong Zhuolin":
      ["Hey everyone,I am Tong Zhuolin.A Student majoring in biological sciences at Hubei University. She is an optimistic and straightforward girl in the team, with a wide range of hobbies.She is enthusiastic about practice and volunteer activities, studying hard, going further and further on the road of working hard. She has excellent professional ability, and participated in many scientific research competitions. ", "https://static.igem.wiki/teams/4245/wiki/shrunkmemberimages/vineeth.png", "STUDENT", "3"],

    "Zheng Xiaotong":
      ["Hey! I’m Manaswi.A student majoring in ideological and political Education. She is a member of the social practice group. At first, I thought that it would be comparatively easier to talk the responsibility of social practice in this competition on biology. But later, through the team's popularization activities about relevant knowledge and volunteer science popularization courses,I gradually felt the comprehensiveness and diversity of the competition, which not only requires innovation in research, but also requires real promotion of biology in practice,and the acquisition of knowledge and growth through down-to-earth efforts. At the same time, because of the IGEM competition, I have established closer and closer contact with other members of the team in a short period of time, and I have also understood the value and meaning of teamwork. I look forward to the team achieving good results in the end!", "https://static.igem.wiki/teams/4245/wiki/shrunkmemberimages/manaswi.png", "STUDENT", "6"],

    " Jiang Wenhao":
      ["Hey! I’m  Jiang Wenhao.I am an undergraduate student from the School of Life Sciences at Hubei University, with a strong interest in synthetic biology. I used to spend my spare time exploring the mysteries of biosynthesis. I forged ahead on the path of hydrogen production through enzymatic method, taking into account the current energy crisis in humanity. After deeply understanding the project, I took up the role of video production leader, working on the team's human practice and publicity..", "https://static.igem.wiki/teams/4245/wiki/shrunkmemberimages/nick.png", "STUDENT", "6"],

    "Liu Chuan":
      ["Howdy! My name is Liu Chuan, an undergraduate student majoring in biological sciences at Hubei University. I am honored to participate in the 2023 IGEM as the team's leader. I have gained a lot along the way from being unknown for at first, getting to know the team members during the competition, and finally becoming familiar with the whole team. The improvement of scientific research ability, management ability and interest in synthetic biology will be an invisible asset for me in my later study life. Thank you very much to the organizers of this event, Hubei University, and the people who helped us during the competition, for helping us successfully participate in this competition.", "https://static.igem.wiki/teams/4245/wiki/shrunkmemberimages/cho.png", "STUDENT", "6"],

    "Ruan Jiapeng":
      ["Hey, I’m Ruan Jiapeng and I come from Hubei University. I am very happy to participate in the IGEM competition. I am the leader of the experimental group in the team. Although it is very tiring to do the experiment, it is something we must go through in order to succeed. I hope the experiment goes smoothly, and our team can achieve good results!", "https://static.igem.wiki/teams/4245/wiki/shrunkmemberimages/christina-yi.png", "STUDENT", "6"],

    "Jiang Zhihao":
      ["Hello everyone, I'm Jiang Zhihao, responsible for the production of animated videos. has taught me a lot, not only improving the ability of biological manipulation, but also cultivating the way of thinking and ability of video production. As a consequence, now as long as I see some animated videos, I will start to analyze how it is made (laughs*)", "https://static.igem.wiki/teams/4245/wiki/shrunkmemberimages/vandana.png", "STUDENT", "6"],

    "Wan Zheng":
      ["Hello iGEMers, my name is Wan Zheng.I'm in charge of the web page building part in this team, and I am involved in the human practice part At the same time. This is my first time participating in the IGEM competition. From this competition, in addition to mastering the formal web development process, I also have a deep understanding of biology. All in all, it was an unforgettable experience.", "https://static.igem.wiki/teams/4245/wiki/shrunkmemberimages/hari.png", "STUDENT", "2"],

    "Huang Xinyi":
      ["Hello everyone, I am Huang Xinyi from the School of Arts, Hubei University. I'm in charge of the art part of this team. I love art and painting, and in my free time I enjoy listening to music, painting and movies. I'm looking forward to learning and collaborating with the members. Let's do it together!", "https://static.igem.wiki/teams/4245/wiki/shrunkmemberimages/ricky.png", "STUDENT", "4"],

    "Xiao Yubo":
      ["Hello! My name is Xiao Yubo, I come from the School of Mathematics and Statistics majoring in Information and Computing Science, and I am responsible for mathematical modeling in this IGEM competition. I am very happy to have the opportunity to meet and discuss with students from different majors because of the IGEM and feel the wonderful sparks generated by the collision of ideas.", "https://static.igem.wiki/teams/4245/wiki/shrunkmemberimages/sam.png", "STUDENT", "6"],

    "Srirag Tatavarti":
      ["Hey everyone! I'm Srirag Tatavarti, and I am a senior on the Lambert iGEM team. iGEM has been an amazing experience for me since I get to be on the frontlines of groundbreaking scientific discoveries, collaborate with other incredible scientists on our team, and pursue my interests in math, CS, and molecular biology. Outside of the lab, I love reading, playing basketball, and sleeping.", "https://static.igem.wiki/teams/4245/wiki/shrunkmemberimages/srirag.png", "STUDENT", "2"],

    "Hannah Noh":
      ["Bonjour! I’m Hannah, and I’m a senior (Still can’t believe it) on the Lambert iGEM team. I work in education, implementation, and hardware. Out of all the experiences I have gained as a synthetic biologist, attending the Jamboree has always been the most thrilling. Paris being this year’s site will only make it even better. Outside of the lab, some Marvel and DC comics, Netflix, and dried mushroom snacks will be enough to raise my satisfaction to 100%! Just make sure the room’s not too cold and dark. I’m very excited to meet all of you at the Giant Jamboree!", "https://static.igem.wiki/teams/4245/wiki/shrunkmemberimages/hannah.png", "STUDENT", "6"],

    "Rathi Murugan":
      ["Hi everyone! I’m Rathi Murugan and I’m (finally) a senior at Lambert. Even though this is my first and final year on the Lambert iGEM team, I’ve had an amazing time working with my team and I can’t imagine not being a part of this exciting community! iGEM has been such an important part of my life this year, giving me so many new experiences and irreplaceable memories! Outside the lab, I spend time practicing martial arts and reading every single romcom I can get my hands on. I’m excited to meet you all at Jamboree!", "https://static.igem.wiki/teams/4245/wiki/shrunkmemberimages/ratio.png", "STUDENT", "5"],

  };

      // console.log("ayo");
      const sections = [

];

const tabItems = {

};

let observerOptions = {
root: document.querySelector('#scrollArea'),
rootMargin: '0px',
threshold: 1.0
}

let observerCallback = (entries, observer) => {
entries.forEach((entry) => {
    console.log("callback observing thingy");
    if (entry.isIntersecting) {
    const tabItem = tabItems[entry.target.id.replace("div-", "")];
    console.log(tabItem)
    tabItem.classList.add("sidebarTabActive");

    Object.values(tabItems).forEach((item) => {
        if (item != tabItem) {
        item.classList.remove('sidebarTabActive');
        }
    })

    }
});
};

const observer = new IntersectionObserver(observerCallback, observerOptions);

sections.forEach((sec) => observer.observe(sec));