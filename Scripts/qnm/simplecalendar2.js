var Start = {
    /**
     * @desc : switch direction
     */
    dir: 'right',
    /**
     * @func : initilize
     * @param : year
     * @param : month
     */
    init: function (year, month, all) {
        month -= 1;

        var dayCount = [31, (this.isLeap(year) ? 29 : 28), 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
            date = new Date(year, month, 1),
            currentDay = date.getDay(),
            indentCell = 0,
            allCell = 43,
            dayStart = 0;

        for (var i = 0; i < 7; i++) {
            dayStart == 7 && (dayStart = 0);
            dayStart == currentDay && (indentCell = i);
            dayStart++;
        }

        var validCell = indentCell + dayCount[month];

        this.createFrame(year, month, validCell, indentCell, allCell);

        this.selectDay();

        //$('.day-event').each(function (i) {
        //    var eventMonth = $(this).attr('date-month');
        //    var eventDay = $(this).attr('date-day');
        //    $('tbody tr td[date-month="' + eventMonth + '"][date-day="' + eventDay + '"]').addClass('event');
        //});
        var arrIdOr = [];
        $('.event-item').each(function (i) {
            var eventMonth = $(this).attr('date-month');
            var eventDay = $(this).attr('date-day');
            var eventYear = $(this).attr('date-year');
            var tcId = $(this).attr('tc-id');
            $('tbody tr td[date-month="' + eventMonth + '"][date-day="' + eventDay + '"][date-year="' + eventYear + '"]').addClass('event');

            /**
             * Set event item of current day visible
             */

            if (!all) {
                if ($(this).attr("date-day") === d.getDate().toString() && eventYear === d.getFullYear().toString()) {
                    $(this).show();
                }
            } else {
                if (eventMonth == (month + 1) && arrIdOr.indexOf(tcId) < 0) {
                    arrIdOr.push($(this).attr('tc-id'));
                    $(this).show();
                }
                else
                    $(this).hide();
            }
        });

        $('tbody td.td-day').on('click', function (e) {
            $('.event-item').slideUp('fast');
            var monthEvent = $(this).attr('date-month');
            var dayEvent = $(this).text();
            var yearEvent = $(this).attr('date-year');
            //tan viet lay ngay chon ra ngoai
            if (dayEvent == "01" || dayEvent == "21" || dayEvent == "31") {
                $(".event-block-day").html(parseInt(dayEvent));
            } else {
                if (dayEvent == "02" || dayEvent == "22") {
                    $(".event-block-day").html(parseInt(dayEvent));
                } else {
                    if (dayEvent == "03" || dayEvent == "23") {
                        $(".event-block-day").html(parseInt(dayEvent));
                    } else {
                        $(".event-block-day").html(parseInt(dayEvent));
                    }
                }
            }
            //end tan

            if (year == yearEvent) {
                $('.event-item[date-month="' + monthEvent + '"][date-day="' + dayEvent + '"][date-year="' + yearEvent + '"]').slideDown('fast');
            }

        });

        $('tbody td').on('click', function (e) {
            if ($(this).hasClass('event')) {
                $('tbody td').removeClass('active');
                $(this).addClass('active');
            } else {
                $('tbody td').removeClass('active');
            };
        });
    },
    /**
     * @func : Skeleton
     * @param : year
     * @param : month
     * @param : validCell
     * @param : indentCell
     * @param : allCell
     */
    createFrame: function (year, month, validCell, indentCell, allCell) {

        var tbody = '<tr>',

		thead = '<thead><tr><td>CN</td><td>T2</td><td>T3</td><td>T4</td><td>T5</td><td>T6</td><td>T7</td></tr></thead>',

		today = this.isToday(year, month),

		that = this,

		createDay = function (i) {
		    var current = today == (i - indentCell) ? ' current-day' : '';
		    tbody = tbody + '<td class="td-day' + current + '" date-month="' + parseInt(month + 1) + '" date-day="' + that.formatNum((i - indentCell)) + '" date-year="' + parseInt(year) + '" >' + that.formatNum((i - indentCell)) + '</td>';
		},

		otherDay = function (i) {
		    var type = i > validCell ? 'td-back' : 'td-front';
		    tbody += '<td class="' + type + '"></td>';
		}

        for (var i = 1; i < allCell; i++) {
            (i > 1 && ((i - 1) % 7 == 0)) && (tbody += '<tr>');
            (i > indentCell && i <= validCell) ? createDay(i) : otherDay(i);
            (i % 7 == 0) && (tbody += '</tr>');
        }

        $('.u-start-body').html(thead + '<tbody>' + tbody + '</tbody>');

        this.fillDay();

    },
    /**
     * @func : filling date
     */
    fillDay: function () {
        var backIndex = 1,
            frontCnt = $('.u-start-body td.td-front').length - 1,
            first = $('.u-start-year').text() + '/' + $('.u-start-month').text() + '/01',
            lastDay = this.formatDate(new Date(first).getTime() - 86400000, 'date'),
            frontIndex = lastDay - frontCnt,
            that = this;
        $('.u-start-body td.td-back').each(function () {
            $(this).text(that.formatNum(backIndex));
            backIndex += 1;
        });
        $('.u-start-body td.td-front').each(function () {
            $(this).text(that.formatNum(frontIndex));
            frontIndex += 1;
        });
    },
    /**
     * @func : clicking then selecting a day 
     */
    selectDay: function () {
        var that = this,
            date = null;
        $('.u-start-body').undelegate().delegate('td.td-day', 'click', function () {
            //$(this).addClass('current-day').siblings().removeClass('current-day').parent().siblings().children().removeClass('current-day');
            date = $('.u-start-year').text() + '-' + $('.u-start-month').text() + '-' + $(this).text();
            that.getData(date);
        });
    },
    /**
     * @func : format digit
     */
    formatNum: function (num) {
        num = num.toString();
        num.length == 1 && (num = '0' + num);
        return num;
    },
    /**
     * @func : format time stamp
     * @param : date
     * @param : type:retune type
     */
    formatDate: function (time, type) {
        var date = new Date(time),
            year = date.getYear(),
            month = date.getMonth() + 1,
            date = date.getDate();
        switch (type) {
            case 'year':
                return year;
                break;
            case 'month':
                return month;
                break;
            case 'date':
                return date;
                break;
            default:
                return year + '-' + month + '-' + date;
        }
    },
    /**
     * @func : return Today's date
     */
    today: function () {
        var date = new Date();
        return [date.getFullYear(), date.getMonth(), date.getDate()];
    },
    /**
     * @func : is it leap?
     */
    isLeap: function (year) {
        return (year % 4) == 0 ? true : false;
    },
    /**
     * @func : is today?
     */
    isToday: function (year, month) {
        var date = this.today();
        return (date[0] == year && date[1] == month) ? date[2] : false;
    },
    /**
     * @func : change value by selecting month
     * @param : year:
     * @param : month:
     * @param : callback:
     */
    initDate: function (year, month, callback) {
        $('.u-start-month').text(month);
        $('.u-start-year').text(year);
        callback && callback.call(this);
    },
    /**
     * @func : next month
     */
    nextMonth: function () {
        var month = $('.u-start-month').text(),
            prev = $('.u-start-month').text(),
            year = $('.u-start-year').text(),
            all = true;

        if (month < 12) {
            ++month;
        }
        else {
            month = '1';
            ++year;
        }

        var next = $('.next-month-a').text();
        if (next < 12) {
            ++next;
        }
        else {
            next = '1';
        }


        document.getElementsByClassName('prev-month-a').item(0).innerHTML = $('.u-start-month').text();
        document.getElementsByClassName('next-month-a').item(0).innerHTML = next;
        document.getElementsByClassName('u-start-month-list').item(0).innerHTML = month;

        this.initDate(year, month, $.proxy(function () {
            this.dir = 'right';
            this.init(year, month, all);
        }, this));
    },
    /**
     * @func : last month
     */
    prevMonth: function () {
        var month = $('.u-start-month').text(),
            year = $('.u-start-year').text(),
            all = true;

        $('.event-item-list').find(".event-item").each(function () {
            var item = $(this).find(".year-event").val();
            if (year != item) {
                $(".u-start-body").find("td.td-day").removeClass("event");
            }
        });

        if (month <= 1) {
            month = 12;
            --year;
        }
        else {
            --month;
        }
        var prev = $('.prev-month-a').text();
        if (prev <= 1) {
            prev = 12;
        }
        else {
            --prev;
        }

        document.getElementsByClassName('next-month-a').item(0).innerHTML = $('.u-start-month').text();
        document.getElementsByClassName('prev-month-a').item(0).innerHTML = prev;
        document.getElementsByClassName('u-start-month-list').item(0).innerHTML = month;
        this.initDate(year, month, $.proxy(function () {
            this.dir = 'left';
            this.init(year, month, all);
        }, this));
    },
    /**
     * @func : ajax requre data
     * @param : date
     */
    getData: function (date) {
        //$('.u-start-footer').text(date);

    }

}
var d = new Date();

var currentYear = d.getFullYear();

//var currentMonth = (d.getMonth() + 1 < 10) ? ("0" + (d.getMonth() + 1)) : (d.getMonth() + 1);
var currentMonth = d.getMonth() + 1;

document.getElementsByClassName('u-start-year').item(0).innerHTML = currentYear;

document.getElementsByClassName('u-start-month').item(0).innerHTML = currentMonth;

document.getElementsByClassName('u-start-month-list').item(0).innerHTML = currentMonth;

var prev = $('.u-start-month').text();

if (prev <= 1) {
    prev = 12;
}
else {
    --prev;
}

var next = $('.u-start-month').text();

if (next < 12) {
    ++next;
}
else {
    next = '1';
}

document.getElementsByClassName('prev-month-a').item(0).innerHTML = prev;

document.getElementsByClassName('next-month-a').item(0).innerHTML = next;

Start.init(currentYear, currentMonth, true);

$('document').ready(function () {
    $('.u-start-prev').on('click', function () {
        Start.prevMonth();
    });
    $('.u-start-next').on('click', function () {
        Start.nextMonth();

    });
});