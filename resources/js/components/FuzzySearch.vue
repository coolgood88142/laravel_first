<template>
	<div id="channel_list">
		<div style="text-align:right;margin-bottom: 20px;">
			<input type="button" id="add" :class="btnSelect" value="送出"
				v-on:click="showSelectChannels()">
		</div>
		<div class="form-group">
			<vSelect v-model="searchData" label="name" :options="toListData"
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
				<tr v-for="(data, index) in Search" :key="index">
					<th>{{ data.userId }}</th>
					<th>{{ data.Id }}</th>
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
let defaultLable = {"id": 0, "name": "---請選擇---"}

export default {
	data() {
		return {
			btnSelect: 'btn btn-primary',
			searchData: '',
			toListData: ''
		}
	},
	methods: {
		onSearch(search, loading) {
			loading(true)
			this.search(loading, search, this)
		},
		search: _.debounce((loading, search) => {
			 axios.get(`https://jsonplaceholder.typicode.com/todos/${search}`)
			.then(
				response => (
				this.toListData = response.searchData
			))
			.catch(error => {
				console.log(error)
				this.errored = true
			})
			.finally(() => this.loading = false)
		}, 350)
	},
}
</script>
