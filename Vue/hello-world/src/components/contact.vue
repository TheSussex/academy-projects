<template>
    <div class="contact">
        <form action="">
            <input v-model="userName" type="text" placeholder="Name" value=""><br><br>
            <input v-model="userEmail" type="email" placeholder="Email" value=""><br><br>
            <textarea v-model="msg" placeholder="Enter a message" id="" name="message" ></textarea><br><br>
            <button @click="onClick">Submit</button>
        </form>
    </div>
</template>