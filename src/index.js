// @flow

export default class Scrolload {
    constructor(options) {
        let ops = $.extend(true, {
            page: 1,
            count: 10,
            tpl: function(item) {
                return `
                    <div class="item">item ${item}</div>
                `;
            },
        }, options);
        this.page = ops.page;
        this.count = ops.count;
        this.data = ops.data;
        this.totalPage = Math.ceil(this.data.length / this.count);
        this.$container = $(ops.container);
        this.tpl = ops.tpl;
        this.isLoading = false;

        this.render().onScroll();
    }
    render() {
        let data,
            tpl,
            start = (this.page - 1) * this.count,
            end = this.page * this.count,
            total = this.data.length;
        end = end > total ? total : end;
        data = this.data.slice(start, end);
        tpl = this.template(data);
        this.append(tpl);
        return this;
    }
    template(data) {
        let tpl = '',
            htmls = [];
            console.log(this);
        data.map((item) => {
            tpl = this.tpl(item);
            htmls.push(tpl);
            tpl = ``;
        });
        return htmls.join('');
    }
    append(tpl) {
        $(tpl).appendTo(this.$container);
        this.page ++;
        this.isLoading = false;
    }
    onScroll() {
        $(window).on('scroll', () => {
            let bodyHeight = $('body').height(),
                winHeight = $(window).height(),
                scrollTop = $(window).scrollTop(),
                thresold = bodyHeight - winHeight - scrollTop;
            console.log(thresold);
            if(thresold < 20 && !this.isLoading) {
                this.isLoading = true;
                console.log('is loading ...');
                if(this.totalPage >= this.page) {
                    setTimeout(() => {
                        this.render();
                        console.log('loaded.');
                    }, 500);
                } else {
                    console.log('no more data.');
                }
            }
        });
    }
}
