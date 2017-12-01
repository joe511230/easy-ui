<template>
	<div class="eu-dialog-datepicker" @click.stop="">
		<div class="eu-datepicker-info">
			<button class="eu-datepicker-pre" @click="preYear">&lt;&lt;</button>
			<button class="eu-datepicker-pre" @click="preMonth">&lt;</button>
			<span class="eu-datepicker-value">{{this.timeLabel}}</span>
			<button class="eu-datepicker-next" @click="nextMonth">&gt;</button>
			<button class="eu-datepicker-next" @click="nextYear">&gt;&gt;</button>
		</div>
		<div class="eu-datepicker-day">
			<div class="eu-header">
				<div>周日</div>
				<div>周一</div>
				<div>周二</div>
				<div>周三</div>
				<div>周四</div>
				<div>周五</div>
				<div>周六</div>
			</div>
			<div class="eu-content">
				<div v-for="item in days"
					:class='item.day | classShow(day, month, item.month)'
					@click="datePickerHander(item.year, item.month, item.day)">{{item.day}}</div>
			</div>
		</div>
		
	</div>
</template>
<script>
	import { timeFormat } from 'src/util.js'
	export default {
		name: 'DateBox',
		data(){
			return {
				date: '',
				year: '',
				month: '',
				day: '',
			}
		},
		filters: {
			classShow(value, _value, month, _month){
				if(month > _month){
					return 'pre-month'
				}else if(month < _month) {
					return 'next-month'
				}else{
					if(value === _value){
						return 'active'
					}
				}
			}
		},
		computed: {
			days(){
				// 当月第一天是星期 几
				let firstDay = new Date(this.year, this.month - 1, 1).getDay()
				// 当月有多少天
				let lastDate = new Date(this.year, this.month, 0).getDate()
				// 上一个月有多少天
				let lastDateOfLastMonth = new Date(this.year, this.month - 1,  0).getDate()

				// 下一个月
				let firstDayOfLastMonth = 6 - new Date(this.year, this.month, 1).getDay()
				let nextMonth = this.month + 1 > 12 ? 1 : this.month + 1

				let ret = []
				let lastMonthDays = firstDay 
				for(let i = 0 ; i <= 7 * 6; i++){
					let _date = {}

					if(i < lastMonthDays){
						let _d = lastMonthDays - i - 1
						_date = {
							year: this.year,
							month: this.month - 1,
							day: lastDateOfLastMonth - _d
						}
					}else if(i > lastDate + lastMonthDays - 1){
						if((i - lastDate - lastMonthDays + 1) <= firstDayOfLastMonth){
							_date = {
								year: this.year,
								month: nextMonth,
								day: i - lastDate - lastMonthDays + 1
							}
						}else{
							break
						}
					}else {
						_date = {
							year: this.year,
							month: this.month,
							day: i - lastMonthDays + 1
						}
					}
					ret.push(_date)
				}
				return ret
			},
			timeLabel(){
				return `${timeFormat(this.month)}/${timeFormat(this.day)}/${timeFormat(this.year)}`
			}
		},
		methods: {
			today(){
				this.date = new Date()
				this.year = this.date.getFullYear()
				this.month = this.date.getMonth() + 1
				this.day = this.date.getDay()
			},
			preMonth(){
				this.month--
				if(this.month < 1){
					this.month = 12
					this.year--
				}
			},
			nextMonth(){
				this.month++
				if(this.month > 12){
					this.month = 1
					this.year++
				}
			},
			preYear(){
				this.year--
			},
			nextYear(){
				this.year++
			},
			datePickerHander(year, month, day){
				this.year = year
				this.month = month
				this.day = day
			}
		},
		updated(){
			console
			this.$emit('change', this.timeLabel)
		},
		mounted(){
			this.today()
		}
	}
</script>
<style lang="scss">
	%td-item{
		float: left;
		width: 14%;
		height: 36px;
		line-height: 36px;
	}
	.eu-dialog-datepicker{
		position: absolute;
		width: 300px;
		border: 1px solid #409eff;
		border-radius: 4px;
	}
	.eu-datepicker{
		&-info{
			height: 36px;
			line-height: 36px;
			text-align: center;
		}
		&-value{
			margin: 0 12px;
			vertical-align: middle;
		}
		&-pre,
		&-next{
			cursor: pointer;
			user-select: none;
		}
		&-day{
			width: 100%;
			padding: 0 1%;
			text-align: center;
			vertical-align: middle;
			border-collapse: collapse;
			.eu-header > div{
				color: #409eff;
				@extend %td-item;
			}
			.eu-content > div{
				cursor: pointer;
				@extend %td-item;
				&:hover{
					background-color: rgba(64,158,255,0.6)
				}
				&.active{
					border: 1px solid #ccc;
					border-radius: 50%;
					background-color: #fff;
				}
				&.pre-month,
				&.next-month{
					color: #ddd;
				}
			}
		}
	}
</style>