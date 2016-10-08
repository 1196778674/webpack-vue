<template>
    <button class="chooseDate">
        <span @click="toggle" class="nowdate">{{ value }}</span><span class="icon-time" @click="toggle">&nbsp;</span>
        <div class="dateSelector" v-if="open" transition="fade">
            <div class="wrap year" v-if="yearShow">
                <ul>
                    <li class="btn" @click="yearPre"><i class="fa fa-angle-up"></i></li>
                    <li v-for="item in years" :class="{ active : (year === item) }" @click="chooseYear(item)">{{ item }}</li>
                    <li class="btn" @click="yearNext"><i class="fa fa-angle-down"></i></li>
                </ul>
            </div>
            <div class="wrap month" v-if="monthShow">
                <ul>
                    <li class="btn" @click="toggleToYear">{{ year }}年</li>
                    <li v-for="item in months" :class="{ active: (month === $index + 1) }" @click="chooseMonth($index + 1)">{{ item }}</li>
                </ul>
            </div>
            <div class="wrap date" v-if="dateShow">
                <ul>
                    <li class="btn" @click="toggleToMonth">{{ year }}年 {{ months[month - 1] }}</li>
                    <li class="day">日</li>
                    <li class="day">一</li>
                    <li class="day">二</li>
                    <li class="day">三</li>
                    <li class="day">四</li>
                    <li class="day">五</li>
                    <li class="day">六</li>

                    <li v-for="item in dates" :class="{ other: !item.thismonth, active: (date === item.date) && item.thismonth }" @click="chooseDate(item.date, item.thismonth)">{{ item.date }}</li>
                </ul>
            </div>
            <div class="wrap time" v-if="timeShow">
                <ul>
                    <li class="btn" @click="toggleToDate">{{ year + '年 ' + month + '月' + date + '日' }}</li>
                </ul>
                <input type="tel" placeholder="00" v-model="hour"> : <input type="tel" placeholder="00" v-model="min">
                <div class="button" :class="{ able: isAble }" @click="checkNow">确定</div>
            </div>

            <div style="clear:both;margin-bottom:10px"></div>
        </div>
    </button>
</template>

<script>
export default {
    name: 'datePicker',
    props: {
        microtime: {
            type: Number,
            default: 0
        }
    },
    data () {
        return {
            open: false,
            yearShow: false,
            monthShow: false,
            dateShow: true,
            timeShow: false,
            year: new Date().getFullYear(),
            month: 4,
            date: new Date().getDate(),
            hour: '',
            min: '',
            years: [new Date().getFullYear() - 4, new Date().getFullYear() - 3, new Date().getFullYear() - 2, new Date().getFullYear() - 1, new Date().getFullYear(), new Date().getFullYear() + 1, new Date().getFullYear() + 2, new Date().getFullYear() + 3, new Date().getFullYear() + 4],
            months: ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月'],
            dates: [],
            isAble: false,
            value: '请选择时间'
        }
    },
    methods: {
        checkNow () {
            if (!this.isAble) return
            var month = (this.month+'').length < 2 ? ('0' + this.month) : this.month
            // this.value = [this.year, month, this.format(this.date)].join('-') + ' ' + [this.format(this.hour), this.format(this.min), '00'].join(':')
            this.value = [this.year, month, this.format(this.date)].join('-')
            this.toggle()
            this.timeShow = false
            this.yearShow = false
            this.dateShow = true
            this.microtime = this.timestamp()
        },
        timestamp () {
            let date = new Date(this.year, this.month - 1, this.date, this.hour, this.min, 0)
            return date.getTime() / 1000 // 兼容PHP时间戳
        },
        format (val) {
            return (val.toString().length === 1) ? '0' + val : val
        },
        toggle () {
            this.open = !this.open
        },
        toggleToDate () {
            this.dateShow = true
            this.timeShow = false
        },
        toggleToMonth () {
            this.monthShow = true
            this.dateShow = false
        },
        toggleToYear () {
            this.yearShow = true
            this.monthShow = false
        },
        chooseYear (year) {
            this.year = year
            this.yearShow = false
            this.monthShow = true
        },
        chooseMonth (month) {
            this.month = month
            this.monthShow = false
            this.dateShow = true
        },
        chooseDate (date, thismonth) {
            if (!thismonth) return
            this.date = date
            // this.dateShow = false
            // this.timeShow = true
            var month = (this.month+'').length < 2 ? ('0' + this.month) : this.month
            this.value = [this.year, month, this.format(this.date)].join('-')
            this.toggle()
            this.timeShow = false
            this.yearShow = false
            this.dateShow = true
            this.microtime = this.timestamp()
        },
        updateDate () {
            let thisyear = this.year
            let thismonth = this.month
            let countThisMonthDays = new Date(thisyear, thismonth, 0).getDate()
            let thisMonthFirstDay = new Date(thisyear, thismonth - 1, 0).getDay() + 1
            thisMonthFirstDay = (thisMonthFirstDay === 7) ? 0 : thisMonthFirstDay
            this.dates = []
            for (let i = 1; i <= countThisMonthDays; i++) {
                let thisDate = {
                    date: i,
                    thismonth: true
                }
                this.dates.push(thisDate)
            }
            this.dates.reverse()
            for (let i = 0; i < thisMonthFirstDay; i++) {
                let thisDate = {
                    date: new Date(thisyear, thismonth - 1, 0).getDate() - i,
                    thismonth: false
                }
                this.dates.push(thisDate)
            }
            this.dates.reverse()
        },
        yearPre () {
            this.years = this.years.map((val, index) => {
                return this.years[0] - 3 + index
            })
        },
        yearNext () {
            this.years = this.years.map((val, index) => {
                return this.years[0] + 3 + index
            })
        }
    },
    ready () {
        let date = new Date()
        this.year = date.getFullYear()
        this.month = date.getMonth() + 1
        let thisyear = this.year
        this.years = this.years.map((val, index) => {
            return thisyear - 4 + index
        })
        this.updateDate()
    },
    watch: {
        'year': function () {
            this.updateDate()
        },
        'month': function () {
            this.updateDate()
        }
    },
    computed: {
        isAble () {
            return (this.year && this.month && this.date && this.hour.length <= 2 && this.min.length <= 2 && !isNaN(parseInt(this.hour)) && this.hour < 24 && this.hour >= 0 && this.min < 60 && this.min >= 0 && !isNaN(parseInt(this.min)))
        }
    }
}
</script>