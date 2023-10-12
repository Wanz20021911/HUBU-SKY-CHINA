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
  function changeName2(name) {
    document.getElementById("mNameID2").innerHTML = name;
    document.getElementById("mPicID2").src = memberInfo[name][1];
    document.getElementById("mRoleID2").innerHTML = memberInfo[name][2];
    document.getElementById("mBioID2").innerHTML = memberInfo[name][0];

    // Update number of sleep
    var sleepNumber = memberInfo[name][3]
    $("#allCircles div").parent().find('div').removeClass("closedCircle");
    for (let i = 0; i < sleepNumber; i++) {
      document.getElementById("circle" + (i + 1)).classList.add('closedCircle');
    }
  }
  var memberInfo = {
    "Huang Ziyue":
      ["Hello friends, my name is Huang Ziyue.A Student, majoring in ideological and political education, is mainly responsible for social practice and team propaganda in our team, a big family with friendship, unity and a clear division of labor. Even if there are many difficulties, courage is essential. I hope that with the joint efforts of everyone, we will pass the difficult pass. Although the road ahead is long, it is still full of hope.", "https://static.igem.wiki/teams/4927/wiki/team/huang-zi-yue.png", "STUDENT"],

    "Song Yiqian":
      ["Hello everyone, my name is Song Yiqian!A student majoring in biological sciences at Hubei University. She is responsible for the team's artistic design.This is her first time participating in the IGEM competition. The close contact within our team during the preparation process enhanced my cooperation and communication skills, and at the same time, I learned a lot about web and video production, and gained a lot.", "https://static.igem.wiki/teams/4927/wiki/team/song-yi-qian.png", "STUDENT"],

    "Fang Yi":
      ["Hi everyone! My name is Fang Yi.A student majoring in English Education.In the team, she is mainly responsible for the translation of relevant texts, as well as the English dubbing in the videos produced by the team. By participating in this IGEM activity, on the one hand, I enriched my understanding of relevant biological knowledge and realized the practical significance of our team's research products. On the other hand, this activity also allowed me to get to know each other more and more through cooperation and communication with various members of the team, and cultivated a deeper friendship. ", "https://static.igem.wiki/teams/4927/wiki/team/fang-yi.png", "STUDENT"],

    "Lu Zixin":
      ["Hey everyone!I am Lu Zixin, majoring in ideological and political education in Hubei University. I am the leader of the social practice group in the team. Although I am a liberal arts student, I have learned a lot in IGEM and gained a lot. The captain is very good and the team members are great while the project is very fantastic and the future is promising.", "https://static.igem.wiki/teams/4927/wiki/team/lu-zi-xin.png", "STUDENT"],

    "Hu Lijuan":
      ["Hey everyone!I am Hu Lijuan, a student majoring in biotechnology in College of Life Sciences in Hubei University. In the team, she is a member of the experimental group and is indispensable. She is serious and responsible, love life, and dare to challenge. Through this activity, I learned many experimental techniques. “Born ordinary, but not willing to be mediocre.", "https://static.igem.wiki/teams/4927/wiki/team/hu-li-juan.png", "STUDENT"],

    "Tong Zhuolin":
      ["Hey everyone,I am Tong Zhuolin.A Student majoring in biological sciences at Hubei University. She is an optimistic and straightforward girl in the team, with a wide range of hobbies.She is enthusiastic about practice and volunteer activities, studying hard, going further and further on the road of working hard. She has excellent professional ability, and participated in many scientific research competitions. ", "https://static.igem.wiki/teams/4927/wiki/team/tong-zhuo-lin.png", "STUDENT"],

    "Zheng Xiaotong":
      ["Hey! I’m Manaswi.A student majoring in ideological and political Education. She is a member of the social practice group. At first, I thought that it would be comparatively easier to talk the responsibility of social practice in this competition on biology. But later, through the team's popularization activities about relevant knowledge and volunteer science popularization courses,I gradually felt the comprehensiveness and diversity of the competition, which not only requires innovation in research, but also requires real promotion of biology in practice,and the acquisition of knowledge and growth through down-to-earth efforts. At the same time, because of the IGEM competition, I have established closer and closer contact with other members of the team in a short period of time, and I have also understood the value and meaning of teamwork. I look forward to the team achieving good results in the end!", "https://static.igem.wiki/teams/4927/wiki/team/zheng-xiao-tong.png", "STUDENT"],

    "Jiang Wenhao":
      ["Hey! I’m  Jiang Wenhao.I am an undergraduate student from the School of Life Sciences at Hubei University, with a strong interest in synthetic biology. I used to spend my spare time exploring the mysteries of biosynthesis. I forged ahead on the path of hydrogen production through enzymatic method, taking into account the current energy crisis in humanity. After deeply understanding the project, I took up the role of video production leader, working on the team's human practice and publicity.", "https://static.igem.wiki/teams/4927/wiki/team/jiang-wen-hao.png", "STUDENT"],

    "Liu Chuan":
      ["Howdy! My name is Liu Chuan, an undergraduate student majoring in biological sciences at Hubei University. I am honored to participate in the 2023 IGEM as the team's leader. I have gained a lot along the way from being unknown for at first, getting to know the team members during the competition, and finally becoming familiar with the whole team. The improvement of scientific research ability, management ability and interest in synthetic biology will be an invisible asset for me in my later study life. Thank you very much to the organizers of this event, Hubei University, and the people who helped us during the competition, for helping us successfully participate in this competition.", "https://static.igem.wiki/teams/4927/wiki/team/liu-chuan.png", "STUDENT"],

    "Ruan Jiapeng":
      ["Hey, I’m Ruan Jiapeng and I come from Hubei University. I am very happy to participate in the IGEM competition. I am the leader of the experimental group in the team. Although it is very tiring to do the experiment, it is something we must go through in order to succeed. I hope the experiment goes smoothly, and our team can achieve good results!", "https://static.igem.wiki/teams/4927/wiki/team/ruan-jia-peng.png", "STUDENT"],

    "Jiang Zhihao":
      ["Hello everyone, I'm Jiang Zhihao, responsible for the production of animated videos. has taught me a lot, not only improving the ability of biological manipulation, but also cultivating the way of thinking and ability of video production. As a consequence, now as long as I see some animated videos, I will start to analyze how it is made (laughs*)", "https://static.igem.wiki/teams/4927/wiki/team/jiang-zhi-hao.png", "STUDENT"],

    "Wan Zheng":
      ["Hello iGEMers, my name is Wan Zheng.I'm in charge of the web page building part in this team, and I am involved in the human practice part At the same time. This is my first time participating in the IGEM competition. From this competition, in addition to mastering the formal web development process, I also have a deep understanding of biology. All in all, it was an unforgettable experience.", "https://static.igem.wiki/teams/4927/wiki/team/wan-zheng.png", "STUDENT", "2"],

    "Huang Xinyi":
      ["Hello everyone, I am Huang Xinyi from the School of Arts, Hubei University. I'm in charge of the art part of this team. I love art and painting, and in my free time I enjoy listening to music, painting and movies. I'm looking forward to learning and collaborating with the members. Let's do it together!", "https://static.igem.wiki/teams/4927/wiki/team/huang-xin-yi.png", "STUDENT", "4"],

    "Xiao Yubo":
      ["Hello! My name is Xiao Yubo, I come from the School of Mathematics and Statistics majoring in Information and Computing Science, and I am responsible for mathematical modeling in this IGEM competition. I am very happy to have the opportunity to meet and discuss with students from different majors because of the IGEM and feel the wonderful sparks generated by the collision of ideas.", "https://static.igem.wiki/teams/4927/wiki/team/xiao-yu-bo.png", "STUDENT"],

    "Wang Fei":
      ["As an instructor, I have deeply experienced the unique and exciting experience that iGEM competition brings. Witnessing the creativity, talent and tenacity of the student team is an unparalleled experience.Throughout the competition, I saw how students worked collaboratively to turn ideas into innovative biology projects. Not only do they design, build and test biological systems impressively, but they also go to great lengths to solve real-world problems.Interacting and sharing experiences with other iGEM teams is also a very rewarding experience. The competition promotes open source and collaboration, enabling students to benefit from the biology research community on a global scale.Most importantly, the iGEM competition inspires students to think about the ethical and social implications of biology. They're not just working in a lab, they're thinking about how their projects affect people and the environment.Overall, participating in the iGEM competition as an instructor has been a challenging and enlightening experience, and I am proud of my students' ability to grow and innovate. The competition provides them with a unique opportunity to not only achieve in the field of science, but also to play an active role in solving global energy, agriculture, and environmental issues.", "https://static.igem.wiki/teams/4927/wiki/team/wang-fei.png", "INSTRUCTOR"],
    
    "Zhai Chao":
      ["As the instructor, observing the students' performance in the iGEM competition makes me feel proud and excited. They demonstrated not only superior scientific ability, but also teamwork, creativity and tenacity.During the competition, I saw the students' strong determination to constantly face scientific and technological challenges and actively seek solutions. I was inspired by their passion and dedication to exploring new frontiers and thinking about how synthetic biology can be applied to solve real-world problems. Interactions  with other teams also provide valuable opportunities for students to share knowledge, exchange ideas and make international connections. This global spirit of collaboration is very inspiring and gives me confidence that the younger generation of scientists will make a positive difference for the future. Most importantly, through the iGEM competition, I have seen the students' journey from the lab to society. They think about ethics, regulations and biosafety issues that make them not only brilliant scientists, but socially responsible leaders. All of this gives me great confidence for the future, and I look forward to seeing how their innovative solutions can improve our world.", "https://static.igem.wiki/teams/4927/wiki/team/zai-chao.png", "INSTRUCTOR"],

    "Chen Wanping":
      ["Hello! My name is Chen Wanping, I come from the School of Mathematics and Statistics majoring in Information and Computing Science, and I am responsible for mathematical modeling in this IGEM competition. I am very happy to have the opportunity to meet and discuss with students from different majors because of the IGEM and feel the wonderful sparks generated by the collision of ideas.", "https://static.igem.wiki/teams/4927/wiki/team/chen-wan-ping.png", "INSTRUCTOR"],

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
