<script>

    import Navigation from '../../components/Others/Navigation.vue';

    export default{
        data(){
            return{
                activeBtn:1,
            }
        },
        components:{
            Navigation

        },
        methods:{
            showQuestion(number_set){
                this.activeBtn = number_set
            }
        }
    }

</script>

<template>
    <main class="w-full flex flex-col h-dvh" style="background-color: #f5f5f5;">
        <Navigation/>

        <section class="w-full px-6vw pt-3vw">
                <h1 class="font-Header text-4xl text-Red-Darken">FYDP Questionnaires</h1>
                <p class="mt-2">FY 2023</p>

                <div class="w-full flex justify-end mt-4 ">
                        <span class="flex w-4/12  h-4 items-center gap-8">
                            <p class="font-Subheader text-Red-Rose">Completed</p>
                            <progress class="progress progress-error w-56" value="50" max="100" style="width: 100%;"></progress>
                            <p class="font-Subheader text-Red-Rose">50%</p>
                        </span>
                </div>
        </section>

        <section class="w-full flex px-6vw mt-8 justify-between" >

           
            <ul class="ques_list flex flex-col  w-3/12" style="position: relative;left: 1px;">
                <h4 class="w-full text-white  bg-Red-Darken px-4 py-1">FYDP</h4>
                <li class="w-full flex" :class="{'active':activeBtn === 1, 'notActive':activeBtn !== 1}" @click="showQuestion(1)" > Academic Leadership</li>
                <li class="w-full flex" :class="{'active':activeBtn === 2, 'notActive':activeBtn !== 2}" @click="showQuestion(2)" >Research and Innovation</li>
                <li class="w-full flex" :class="{'active':activeBtn === 3, 'notActive':activeBtn !== 3}" @click="showQuestion(3)" >Social Responsibility</li>
                <li class="w-full flex" :class="{'active':activeBtn === 4, 'notActive':activeBtn !== 4}" @click="showQuestion(4)" >Internationalization</li>
                <li class="w-full flex" :class="{'active':activeBtn === 5, 'notActive':activeBtn !== 5}" @click="showQuestion(5)" >Advancing Interdisciplinary</li>
                <li class="w-full flex" :class="{'active':activeBtn === 6, 'notActive':activeBtn !== 6}" @click="showQuestion(6)" >Sustainability</li> 
            </ul>
           
            <div class="flex flex-col items-center w-8/12 bg-white px-16 pb-24 rounded-lg shadow-card2 ques_cont">

                <h4 class="mt-10 w-full font-Subheader text-xl text-Red-Rose">Academic Leadership</h4>
                <p class="mt-8 text-0.9 mb-2" style="width: 80%;">How many learning spaces have been rehabilitated</p>
                <input type="text" class="ques">

                <p class="mt-8 text-0.9 mb-2" style="width: 80%;">What is the percentage of completion of spaces for rehabilitation? </p>
                <input type="text" class="ques">

                <p class="mt-8 text-0.9 mb-2" style="width: 80%;">Out of these learning spaces rehabilitated, how many were intended for emerging engineering programs?</p>
                <input type="text" class="ques">

                <p class="mt-8 text-0.9 mb-2" style="width: 80%;">How many new learning spaces have been constructed?</p>
                <input type="text" class="ques">

                <span class="flex justify-end mt-8" style="width: 80%;">

                    <button class="py-3 px-12 rounded-lg bg-Red-Rose text-white"> Submit</button>

                </span>
            </div>

        </section>


    </main>
</template>

<style scoped>
    .ques_list > li{
        /* border: 1px solid red; */
        padding: 1em 2rem;

    }

    .ques{
        border: 1px solid grey;
        width: 80%;
        border-radius: 5px;
        padding: 10px 10px;
    }

    .active{
        background-color:rgb(255, 240, 221);

    }
    .notActive{
        background-color: none;

    }
    .ques_cont{
        border-top: 1px solid rgb(214, 214, 214);
        border-bottom: 1px solid rgb(214, 214, 214);
        border-right: 1px solid rgb(214, 214, 214);
        border-left: 1px solid rgb(214, 214, 214);
    }
</style>