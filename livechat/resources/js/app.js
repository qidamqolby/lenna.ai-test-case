/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

import axios from "axios";
import "./bootstrap";
import { createApp } from "vue";

/**
 * Next, we will create a fresh Vue application instance. You may then begin
 * registering components with the application instance so they are ready
 * to use in your application's views. An example is included for you.
 */

const app = createApp({
    el: "#app",
    data() {
        return {
            messages: [],
        };
    },
    created() {
        this.fetchMessages();
        window.Echo.private("chat").listen("MessageSent", (e) => {
            this.messages.push({
                message: e.message.message,
                user: e.user,
            });
        });
    },
    methods: {
        fetchMessages() {
            axios.get("/messages").then((response) => {
                this.messages = response.data;
            });
        },
        addMessage(message) {
            this.messages.push(message);
            axios.post("/messages", message).then((response) => {
                console.log(response.data);
            });
        },
    },
});

import ExampleComponent from "./components/ExampleComponent.vue";
app.component("example-component", ExampleComponent);

import ChatForm from "./components/ChatForm.vue";
app.component("chat-form", ChatForm);

import ChatMessage from "./components/ChatMessage.vue";
app.component("chat-messages", ChatMessage);

app.mount("#app");
