<template>
	<v-app>
		<Header />
		<v-content>
			<v-container>
				<transition name="slide" mode="out-in">
					<router-view></router-view>
				</transition>
			</v-container>
		</v-content>
	</v-app>
</template>

<script>
const Header = () => import('./components/Header')

export default {
	components: { Header },
	created(){
		this.$store.dispatch('initStocks')
	}
}
</script>

<style>
	@keyframes slide-in {
		from { transform: translateY(-30px); opacity: 0;}
		to { transform: translateY(0px); opacity: 1;}
	}
	@keyframes slide-out {
		from { transform: translateY(0px); opacity: 1;}
		to { transform: translateY(-30px); opacity: 0;}
	}
	.slide-enter-active {
		animation: slide-in 0.9s ease;
	}
	.slide-leeave-active {
		animation: slide-out 0.9s ease;
	}
</style>

