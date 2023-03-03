<script>
export default {
    props: {
        image_url: {
            type: String,
            required: true
        },

        card_name: {
            type: String,
            required: true
        },

        card_type: {
            type: String,
            required: true
        },
    }
}


</script>



<template>

    <!-- card protorype -->
    <div class="card">
        <div class="card__img">
            <img :src="image_url" alt="">

        </div>
        <h3 class="card__name">
            {{ card_name }}
        </h3>
        <h5 class="card__type">
            {{ card_type }}
        </h5>
    </div>
    <!-- card protorype -->

</template>


<style lang="scss" scoped>
.card {
    padding: 20px;
    text-align: center;
    border: 2px solid black;

    .card__img {
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        

        img {
            width: 100px;
            aspect-ratio: 3/4;
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

</style>