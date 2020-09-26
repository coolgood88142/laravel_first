<template>
	<div id="channel_list">
		<div class="form-group">
			<vSelect v-model="searchData" label="name" :options="searchData"
				:filterable="false" @search="onSearch">
				<span slot="no-options"></span>
			</vSelect>
		</div>
		<div class="form-group" id="select">
			<table class="table table-striped table-bordered" style="width:100%">
				<tr>
					<th>使用者ID</th>
					<th>Id</th>
					<th>標題</th>
					<th>已完成</th>
				</tr>
				<tr v-for="(data, index) in toListData" :key="index">
					<th>{{ data.userId }}</th>
					<th>{{ data.id }}</th>
					<th>{{ data.title }}</th>
					<th>{{ data.completed }}</th>
				</tr>
			</table>
		</div>
		</div>
</template>

<style>
	.channels-width{
		width:30%
	}
</style>

<script>
import "vue-select/dist/vue-select.css"
import vSelect from "vue-select"
Vue.component("vSelect", vSelect)

export default {
	data() {
		return {
			btnSelect: 'btn btn-primary',
			searchData: [],
			toListData: []
		}
	},
	methods: {
		onSearch(search, loading) {
			if(search != ''){
				loading(true)
				this.search(loading, search, this)
			}
		},
		search: _.debounce((loading, search, vm) => {
			 axios.get(`https://jsonplaceholder.typicode.com/todos?title=${search}`)
			.then(
				response => (
				vm.searchData.length = 0,
				vm.toListData.length = 0,
				_.findKey(response.data, function(e, key) { 
					vm.searchData.push(e.title)
					vm.toListData.push(e)
				}),
				loading(false)
				)
			)
			.catch(error => {
				console.log(error)
				this.errored = true
			})
		}, 350)
	},
}
</script>
