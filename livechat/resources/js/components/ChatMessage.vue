<template>
    <ul class="chat" id="viewchat" style="overflow-y: scroll; height: 100%">
        <li class="clearfix" v-for="message in messages" :key="message.id">
            <div class="clearfix">
                <div class="header">
                    <strong>
                        {{ message.user.name }}
                    </strong>
                </div>
                <p>
                    {{ message.message }}
                </p>
            </div>
        </li>
    </ul>
</template>
<script>
export default {
    props: ["messages"],
};
</script>
