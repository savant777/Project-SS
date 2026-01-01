// get data from class.json
let classes = null;

function fetchClassDataAndAddList() {
    fetch('class.json')
    .then(response => response.json())
    .then(data => {
        classes = data;
        addClassList();
    })
    .catch(error => console.error('Error fetching class.json:', error));
}

// add data class to HTML
let ClassList = document.getElementById('classlist');

function addClassList() {
    classes.forEach(ssclass => {
        let newClasses = document.createElement('a');
        newClasses.href = 'class-detail.html?id=' + ssclass.id;
        newClasses.classList.add('theclass', 'ssneon', 'orbitron');
        newClasses.style.backgroundImage = "var(--blue-rgb5), url(" + ssclass.image + ")";
        newClasses.innerHTML = `
        <div class="ssclass-name">${ssclass.name}</div>
        `;
        ClassList.appendChild(newClasses);
    })
}

function fetchClassDataAndAddDetail() {
    fetch('class.json')
    .then(response => response.json())
    .then(data => {
        classes = data;
        addClassDetail();
    })
    .catch(error => console.error('Error fetching class.json:', error));
}

function addClassDetail() {
    let classID = new URLSearchParams(window.location.search).get('id');

    // set button disabled
    let currentPage = classID;
    if (currentPage == 1) {
        document.getElementById('pClass').disabled = true;
    }
    if (currentPage == 8) {
        document.getElementById('nClass').disabled = true;
    }

    let thisClass = classes.filter(value => value.id == classID)[0];
    
    // add class Name
    let className = document.getElementsByTagName('h1')[0];
    className.innerHTML = thisClass.name;

    //add class image
    let classPic = document.getElementById('theclasspic');
    classPic.style.backgroundImage = "var(--blue-rgb5), url(" + thisClass.image + ")";

    //add class detail
    let classDetail = document.getElementById('theclassdt');
    
    // Description
    let desc = thisClass.description;
    let classDesc = document.getElementById('classDesc');
    for (let x = 0; x < desc.length; x++) {
        classDesc.innerHTML += "<p>"+desc[x]+"</p>";
    }
    
    // Status
    let classStat = document.getElementById('classStat');
    classStat.innerHTML = thisClass.stat;

    // Saving Throw & Skill
    let classSaving = document.getElementById('classSaving');
    classSaving.innerHTML += thisClass.savingthrow.join(', ');

    let skill = thisClass.skills;
    let classSkill = document.getElementById('classSkill');
    let skillList = "<ul>";
    for (let x = 0; x < skill.length; x++) {
        skillList += "<li>" + skill[x] + "</li>";
    }
    skillList += "</ul>";
    classSkill.innerHTML += "เลือก " + thisClass.sk_choose + " อย่าง จาก" + skillList;

    // Proficiencies
    let classArmor = document.getElementById('classArmor');
    classArmor.innerHTML += thisClass.armor;
    let classRanged = document.getElementById('classRanged');
    classRanged.innerHTML += thisClass.range;
    let classMalee = document.getElementById('classMalee');
    classMalee.innerHTML += thisClass.malee;

    let classTools = document.getElementById('classTools');
    let tool = thisClass.tools;
    let toolList = "<ul>";
    for (let x = 0; x < tool.length; x++){
        toolList += "<li>" + tool[x] + "</li>";
    }
    toolList += "</ul>";
    if (thisClass.t_given.length > 0){
        if (thisClass.t_choose > 0) {
            classTools.innerHTML += thisClass.t_given.join(', ') + " และเลือก " + thisClass.t_choose + " อย่าง จาก" + toolList;
        } else {
            classTools.innerHTML += thisClass.t_given.join(', ');
        }
        
    } else {
        classTools.innerHTML += "เลือก " + thisClass.t_choose + " อย่าง จาก" + toolList;
    }

    let classVehicle = document.getElementById('classVehicle');
    let vehicle = thisClass.vehicle;
    let vehicleList = "<ul>";
    for (let x = 0; x < vehicle.length; x++){
        vehicleList += "<li>" + vehicle[x] + "</li>";
    }
    vehicleList += "</ul>";
    if (thisClass.vh_given.length > 0){
        classVehicle.innerHTML += thisClass.vh_given.join(', ');
    } else {
        classVehicle.innerHTML += "เลือก " + thisClass.vh_choose + " อย่าง จาก" + vehicleList;
    }

    // Begin Items
    // add option flex 
    let classBeginOp = document.getElementById('classBeginOp');
    let optionList = thisClass.begin;
    for (let option = 1; option <= optionList.length; option++){
        let choice = document.createElement('div');
        choice.classList.add('classOption');
        classBeginOp.appendChild(choice);
    }

    // add number for each option
    let classOption = document.getElementsByClassName('classOption');
    for (let option = 0; option < optionList.length; option++){
        let choice_num = document.createElement('div');
        choice_num.classList.add('classOpNum', 'orbitron');
        choice_num.innerHTML = option+1;
        classOption[option].appendChild(choice_num);
    }

    // add choice flex
    for (let option = 0; option < optionList.length; option++) {
        for (let x = 0; x < optionList[option].length; x++) {
            let citemflex = document.createElement('div');
            citemflex.classList.add('classItemflex');
            classOption[option].appendChild(citemflex);
        }
    }

    // add item picture
    let classFlex = document.getElementsByClassName('classItemflex');
    let itmPicList = thisClass.itempic;
    let n = -1;
    for (let option = 0; option < optionList.length; option++) {
        for (let x = 0; x < itmPicList[option].length; x++) {
            n++
            let citempic = document.createElement('div');
            citempic.classList.add('classItemPic', 'ssneon');
            if (itmPicList[option][x] == "") {
                citempic.style.width = "320px";
                citempic.style.height = "auto";
                citempic.innerHTML = optionList[option][x].chhead;
                classFlex[n].appendChild(citempic);
            } else {
                if (Array.isArray(itmPicList[option][x])) {
                    let flbox = document.createElement('div');
                    flbox.classList.add('classpicflx');
                    classFlex[n].appendChild(flbox);
                    for (let i = 0; i < itmPicList[option][x].length; i++) {
                        let citempicClone = citempic.cloneNode();
                        citempicClone.style = "--pic: url(" + itmPicList[option][x][i] + ")";
                        flbox.appendChild(citempicClone);
                    }
                } else {
                    citempic.style = "--pic: url(" + itmPicList[option][x] + ")";
                    classFlex[n].appendChild(citempic);
                }
            }
        }
    }

    // add item choice
    let m = -1;
    for (let option = 0; option < optionList.length; option++) {
        for (let x = 0; x < itmPicList[option].length; x++) {
            m++
            let citemchoice = document.createElement('div');
            citemchoice.classList.add('classItemCh');
            if (itmPicList[option][x] == "") {
                let choicetxt = "<ul>";
                for (let i = 0; i < optionList[option][x].chlist.length; i++){
                    choicetxt += "<li>"+ optionList[option][x].chlist[i] + "</li>";
                }
                choicetxt += "</ul>";
                citemchoice.innerHTML = choicetxt;
                citemchoice.style = "text-align: left;width: 100%;";
                classFlex[m].appendChild(citemchoice);
            } else {
                if (Array.isArray(itmPicList[option][x])) {
                    citemchoice.style = "width: 100%;";
                    citemchoice.innerHTML = optionList[option][x];
                    classFlex[m].appendChild(citemchoice);
                } else {
                    citemchoice.innerHTML = optionList[option][x];
                    classFlex[m].appendChild(citemchoice);
                }
            }
        }
    }
    
    // Can Do
    let classCan = document.getElementById('classCan');
    classCan.innerHTML = "สิ่งที่ "+ thisClass.name + " ทำได้";

    let classCando = document.getElementById('classCando');

    if (classID == 1 || classID == 8) {
        let candotxt = "<p>"+ thisClass.cando[0] + "</p>";
        candotxt += "<ol>";
        for (let s = 1; s < thisClass.cando.length; s++){
            candotxt += "<li><b><span>" + thisClass.cando[s].sub + "</span></b><ul>";
            for (x = 0; x < thisClass.cando[s].desc.length; x++) {
                candotxt += "<li>" + thisClass.cando[s].desc[x] + "</li>";
            }
            candotxt += "</ul><br></li>";
        }
        candotxt += "</ol>";
        classCando.innerHTML = candotxt;
    }

    if (classID == 2 || classID == 3) {
        let candotxt = "<p>"+ thisClass.cando[0] + "</p>";
        let candoList = thisClass.cando[1];
        candotxt += "<ul>";
        for (x = 0; x < candoList.length; x++) {
            candotxt += "<li>" + candoList[x] + "</li>";
        }
        candotxt += "</ul><p>" + thisClass.cando[2] + "</p>";
        classCando.innerHTML = candotxt;
    }

    if (classID == 4 || classID == 7) {
        let candotxt = "<p>"+ thisClass.cando + "</p>";
        classCando.innerHTML = candotxt;
    }

    if (classID == 5 || classID == 6) {
        let candotxt = "<ul>";
        let candoList = thisClass.cando;
        for (x = 0; x < thisClass.cando.length; x++) {
            candotxt += "<li>" + thisClass.cando[x] + "</li>";
        }
        candotxt += "</ul>";
        classCando.innerHTML = candotxt;
    }
}

function previousClass() {
    let classID = new URLSearchParams(window.location.search).get('id');
    let previousClassID = 1;
    if (classID > 1) {
        previousClassID = classID - 1;
    }
    window.location.href = 'class-detail.html?id=' + previousClassID;
}

function nextClass() {
    let classID = new URLSearchParams(window.location.search).get('id');
    let nextClassID = 1;
    if (classID < 8) {
        nextClassID = Number(classID) + 1;
    }
    window.location.href = 'class-detail.html?id=' + nextClassID;
}

function questResult(name, result){ 
    if(result) {
        console.log("Quest " + name + " Accepted.");
    } else {
        console.log("Quest " + name + " Denied.");
    }
}

function questAlert(callback, name) {
    var confirmBox = document.createElement('div');
    confirmBox.classList.add('confirmBox');

    var messageBox = document.createElement('div');
    messageBox.classList.add('messageBox', 'ssneon');
    messageBox.innerHTML = "<h3 class='orbitron'>Quest</h3>Accept this Quest?";
    confirmBox.appendChild(messageBox);

    var btnBox = document.createElement('div');
    btnBox.classList.add('btnBox');
    messageBox.appendChild(btnBox);

    var btnAccept = document.createElement('div');
    btnAccept.classList.add('btnAccept');
    btnAccept.textContent = "Yes";
    btnBox.appendChild(btnAccept);
    btnAccept.addEventListener('click', questAccept);

    var btnCancle = document.createElement('div');
    btnCancle.classList.add('btnCancle');
    btnCancle.textContent = "No";
    btnBox.appendChild(btnCancle);
    btnCancle.addEventListener('click', questCancle);

    function questAlertQuit() {
        document.body.removeChild(confirmBox);
    }

    function questAccept() {
        callback(name, true);
        questAlertQuit();
    }

    function questCancle() {
        callback(name, false);
        questAlertQuit();
    }

    document.body.appendChild(confirmBox);
}

// get data from agent.json
let agents = null;

function fetchAgentDataAndAddList() {
    fetch('agent.json')
    .then(response => response.json())
    .then(data => {
        agents = data;
        addAgentList();
    })
    .catch(error => console.error('Error fetching agent.json:', error));
}

// add data agent to HTML
function addAgentList() {
    // add picture
    let agentList = document.getElementById('agentList');
    for (let x = 0; x < agents.length; x++){
        let agentNew = document.createElement('div');
        agentNew.classList.add('proGeninfoBox');
        agentList.appendChild(agentNew);
        let agentHr = document.createElement('hr');
        agentList.appendChild(agentHr);
    }

    let agentBox = document.getElementsByClassName('proGeninfoBox');
    for (let x = 0; x < agents.length; x++){
        let agentPic = document.createElement('div');
        agentPic.classList.add('proPic', 'ssneon');
        agentPic.style = "--propic: url(" + agents[x].image + ");";
        agentBox[x].appendChild(agentPic);
        let agentDataSet = document.createElement('div');
        agentDataSet.classList.add('proGeninfo', 'orbitron');
        agentBox[x].appendChild(agentDataSet);
    }

    let agentDataBox = document.getElementsByClassName('proGeninfo orbitron');
    for (let x = 0; x < agents.length; x++){
        agentDataBox[x].innerHTML = "Codename : <div class='proCodeName orbitron'>"+ agents[x].codename +"</div>";
        agentDataBox[x].innerHTML += "Class : "+ agents[x].class + "<div class='ssbar'></div>";
    }
}
