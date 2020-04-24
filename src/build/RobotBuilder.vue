<template>
  <div>
    <div class="top-row">
      <div class="top part">
          <div class="robot-name">
              {{selectedRobot.head.title}}
          </div>
        <img :src="selectedRobot.head.src" title="head"/>
        <button @click="selectPreviousHead()" class="prev-selector">&#9668;</button>
        <button @click="selectNextHead()" class="next-selector">&#9658;</button>
      </div>
    </div>
    <div class="middle-row">
      <div class="left part">
        <img :src="selectedRobot.leftArm.src" title="left arm"/>
        <button @click="selectPreviousLeftArm()" class="prev-selector">&#9650;</button>
        <button @click="selectNextLeftArm()" class="next-selector">&#9660;</button>
      </div>
      <div class="center part">
        <img :src="selectedRobot.torsos.src" title="left arm"/>
        <button @click="selectPreviousTorsos()" class="prev-selector">&#9668;</button>
        <button @click="selectNextTorsos()" class="next-selector">&#9658;</button>
      </div>
      <div class="right part">
        <img :src="selectedRobot.rightArm.src" title="left arm"/>
        <button @click="selectPreviousRightArm()" class="prev-selector">&#9650;</button>
        <button @click="selectNextRightArm()" class="next-selector">&#9660;</button>
      </div>
    </div>
    <div class="bottom-row">
      <div class="bottom part">
        <img :src="selectedRobot.base.src" title="left arm"/>
        <button @click="selectPreviousBases()" class="prev-selector">&#9668;</button>
        <button @click="selectNextBases()" class="next-selector">&#9658;</button>
      </div>
    </div>
  </div>
</template>

<script>
import AvailableParts from '../data/parts';

function getPreviousValidIndex(index, length){
    const deprecatedIndex = index - 1;
    return deprecatedIndex < 0 ? length - 1 : deprecatedIndex;
}

function getNextValidIndex(index, length){
    const incrementedIndex = index + 1;
    return incrementedIndex > length - 1 ? 0 : incrementedIndex;
}

    export default {
        name: 'RobotBuilder',
        data(){
            return {
                AvailableParts,
                selectedHeadIndex : 0,
                selectedLeftArmIndex : 0,
                selectedRightArmIndex : 0,
                selectedTorsoIndex : 0,
                selectedBaseIndex : 0
            };
        },
        computed:{
            selectedRobot(){
                return{ 
                    head: AvailableParts.heads[this.selectedHeadIndex],
                    leftArm : AvailableParts.arms[this.selectedLeftArmIndex],
                    rightArm : AvailableParts.arms[this.selectedRightArmIndex],
                    torsos : AvailableParts.torsos[this.selectedTorsoIndex],
                    base : AvailableParts.bases[this.selectedBaseIndex]
                }
            }
        },
        methods: {
            selectNextHead(){
                this.selectedHeadIndex = getNextValidIndex(this.selectedHeadIndex, AvailableParts.heads.length);
            },
            selectPreviousHead(){
                this.selectedHeadIndex = getPreviousValidIndex(this.selectedHeadIndex, AvailableParts.heads.length);
            },
            selectNextLeftArm(){
                this.selectedLeftArmIndex = getNextValidIndex(this.selectedLeftArmIndex, AvailableParts.arms.length);
            },
            selectPreviousLeftArm(){
                 this.selectedLeftArmIndex = getPreviousValidIndex(this.selectedLeftArmIndex, AvailableParts.arms.length);
            },
            selectNextRightArm(){
                this.selectedRightArmIndex = getNextValidIndex(this.selectedRightArmIndex, AvailableParts.arms.length);
            },
            selectPreviousRightArm(){
                this.selectedRightArmIndex = getPreviousValidIndex(this.selectedRightArmIndex, AvailableParts.arms.length);
            },
            selectNextTorsos(){
                this.selectedTorsoIndex = getNextValidIndex(this.selectedTorsoIndex, AvailableParts.torsos.length);
            },
            selectPreviousTorsos(){
                this.selectedTorsoIndex = getPreviousValidIndex(this.selectedTorsoIndex, AvailableParts.torsos.length);
            },
            selectNextBases(){
                this.selectedBaseIndex = getNextValidIndex(this.selectedBaseIndex, AvailableParts.bases.length);
            },
            selectPreviousBases(){
                this.selectedBaseIndex = getPreviousValidIndex(this.selectedBaseIndex, AvailableParts.bases.length);
            }
        }
    }
</script>

<style lang="scss" scoped>
.part {
  position: relative;
  width:165px;
  height:165px;
  border: 3px solid #aaa;
} 
.part img {
  width:165px;
}
.top-row {
  display:flex;
  justify-content: space-around;
}
.middle-row {
  display:flex;
  justify-content: center;
}
.bottom-row {
  display:flex;
  justify-content: space-around;
  border-top: none;
}
.head {
  border-bottom: none;
}
.left {
  border-right: none;
}
.right {
  border-left: none;
}
.left img {
  transform: rotate(-90deg);
}
.right img {
  transform: rotate(90deg);
}
.bottom {
  border-top: none;
}
.prev-selector {
  position: absolute;
  z-index:1;
  top: -3px;
  left: -28px;
  width: 25px;
  height: 171px;
}
.next-selector {
  position: absolute;
  z-index:1;
  top: -3px;
  right: -28px;
  width: 25px;
  height: 171px;
}
.center .prev-selector, .center .next-selector {
  opacity:0.8;
}
.left .prev-selector {
  top: -28px;
  left: -3px;
  width: 144px;
  height: 25px;
}
.left .next-selector {
  top: auto;
  bottom: -28px;
  left: -3px;    
  width: 144px;
  height: 25px;
}
.right .prev-selector {
  top: -28px;
  left: 24px;  
  width: 144px;
  height: 25px;
}
.right .next-selector {
  top: auto;
  bottom: -28px;
  left: 24px;    
  width: 144px;
  height: 25px;
}
.right .next-selector {
  right: -3px;
}
.robot-name {
    position: absolute;
    top: -25px;
    text-align: center;
    width: 100%;
}
</style>