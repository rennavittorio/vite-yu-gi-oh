<script>
export default {
    
}
</script>

<template>

    <main class="main">

        <div class="container">

            <div class="select-wrapper">
                <select name="cardType" id="" value="">
                    <option value="">type 1</option>
                    <option value="">type 2</option>
                    <option value="">type 3</option>
                </select>
            </div>

            <div class="cards">

                <!-- card protorype -->
                <div class="card">
                    <div class="card__img">
                        <img src="#" alt="">

                    </div>
                    <h3 class="card__name">
                        card name...
                    </h3>
                    <h5 class="card__type">
                        card type...
                    </h5>
                </div>
                <!-- card protorype -->

                <!-- card protorype -->
                <div class="card">
                    <div class="card__img">
                        <img src="#" alt="">

                    </div>
                    <h3 class="card__name">
                        card name...
                    </h3>
                    <h5 class="card__type">
                        card type...
                    </h5>
                </div>
                <!-- card protorype -->

                <!-- card protorype -->
                <div class="card">
                    <div class="card__img">
                        <img src="#" alt="">

                    </div>
                    <h3 class="card__name">
                        card name...
                    </h3>
                    <h5 class="card__type">
                        card type...
                    </h5>
                </div>
                <!-- card protorype -->

            </div>

        </div>

    </main>

</template>


<style lang="scss" scoped>

.main {
    background-color: burlywood;

    .container{
        padding: 50px 0;
        
    }

}

.select-wrapper {
    margin-bottom: 30px;
}

.cards {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 20px;


    .card {
        padding: 20px;
        text-align: center;
        border: 2px solid black;
    
        .card__img {
            width: 100px;
    
            img {
                aspect-ratio: 3/6;
                object-fit: cover;
                object-position: center;
            }
        }
    
    
        .card__name {
            font-size: 1rem;
            font-weight: 700;
        }
    
        .card__type {
            font-size: 0.75rem;
            font-style: italic;
        }
    }

}



</style>