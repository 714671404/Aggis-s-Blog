<div class="a-header">
    <div class="header">
        <div class="top-floor">
            <div class="gn_logo">
                <a href="/" class="box">
                    <span class="logo"></span>
                </a>
            </div>
            <div class="gn_search_v2" id="gn_search_v2">
                <span class="placeholder" v-if="seen">大家都在搜索</span>
                <input type="text" name="selected" value="" class="W_input" @click="gn_v2" @blur="gn_v3">
                <a href="javascript:void(0)" title="搜索" class="W_ficon ficon_search">f</a>
            </div>
            <div class="gn_position" id="a_position">
                <div class="gn_nav">
                    <ul class="gn_nav_list">
                        <li v-for="a_gn_nav in gn_nav_list">
                            <a :href="a_gn_nav.href" class="X_txt1">
                                <em class="W_ficon ficon_home">@{{a_gn_nav.W_ficon}}</em>
                                <em class="S_txt1">@{{ a_gn_nav.S_text }}</em>
                            </a>
                        </li>
                    </ul>
                </div>
                <div class="gn_login">
                    <ul class="gn_login_list">
                        <li><a href="javascript:menu_url(3)" class="S_txt1">注册</a></li>
                        <li class="W_vline S_line1">&nbsp;</li>
                        <li><a href="" class="S_txt1 x_clear" data-toggle="modal" data-target="#login">登陆</a></li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</div>