
<div class="loader"></div>

<style>
.loader {
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  background: 
    radial-gradient(farthest-side,var(--brown-dark) 94%,#0000) top/8px 8px no-repeat,
    conic-gradient(#0000 30%,var(--brown-dark));
    -webkit-mask: radial-gradient(farthest-side,#0000 calc(100% - 8px),#000 0);
  animation: loader 1s infinite linear;
}

@keyframes loader{ 
  100%{transform: rotate(1turn)}
}
</style>