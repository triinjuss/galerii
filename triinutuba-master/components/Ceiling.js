// export default {
//     template: `
//         <a-entity class="lagi">
//             <a-plane rotation="90 0 0" width="20" height="10" color="white"></a-plane>
//             <slot />
//         </a-entity>
//     `
// }
export default {
    template: `
        <a-entity class="lagi">
            <a-plane rotation="90 0 0" width="20" height="10" material="color: #e5e5e5; side: double" ></a-plane>
            <slot />
        </a-entity>
    `
}


