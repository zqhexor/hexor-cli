<template>
  <article class="w-max-pc mx-auto">
    <article id="company-intro" class="pt-[80px]">
      <DetailSectionTitle title="公司简介" />
      <section>
        <p>
          南京爱尔贝信息科技有限公司成立于2015年5月，公司地址位于江苏省南京市江北新区星火路20号星火创业大厦1034室。通过开发建设运营“互联网云通讯平台”，从事移动互联网应用的开发、营销和运营。客户主要包括中国移动、中国电信、中国联通等主流运营商；阿里、腾讯、苏宁、途牛等互联网公司；以及广大中小型创业公司等。
          云通讯平台通过整合互联网流量、短信、呼叫中心等，以PaaS能力和SaaS应用的形式向企业客户提供服务，助力企业提高销售效率和客户服务体验。
        </p>
        <p class="mt-2">
          公司主营业务包括：通讯平台服务（PaaS）、通讯软件服务（SaaS）等2B业务，以及充值缴费、积分兑换、话费支付和互联网彩票等2C业务。
        </p>
      </section>
      <ol class="mt-6 grid grid-cols-4 gap-4">
        <li class="border border-gray-light p-4">
          <h3 class="mb-2 text-sm font-bold text-primary">流量产品</h3>
          <p class="text-xs leading-loose text-content">
            供三网，省份、跨省的优质流量，分发迅速，可以根据活动需求灵活定制多种流量包的定制规格:<br />
            <span class="mr-1 text-[#18a058]">√</span
            >提供后台批充服务和标准化API接口，可定制活动、流量红包、流量直充等多种模式<br />
            <span class="mr-1 text-[#18a058]">√</span
            >多年主流销售渠道维护经验，毫秒级响应，日千万级系统级别，自动化运维服务，及时解决各类问题
          </p>
        </li>
        <li class="border border-gray-light p-4">
          <h3 class="mb-2 text-sm font-bold text-primary">话费产品</h3>
          <p class="text-xs leading-loose text-content">
            话费API接口技术接入服务，为企业提供话费API接口，通过接口自由实现PC端、H5、APP等方式接入。为中小型企业、商家活动、自媒体推广提供一站式话费营销服务，通过活动销售、赠送、积分兑换等方式营销话费，为企业客户提供安全、经济、专业的服务，从而帮助企业、商家拓展新客户并提高现有客户活跃度，提高客户对企业服务的满意度。
          </p>
        </li>
        <li class="border border-gray-light p-4">
          <h3 class="mb-2 text-sm font-bold text-primary">短信产品</h3>
          <p class="text-xs leading-loose text-content">
            提供包括验证码、通知、运营营销等短信服务，三网直达，高质量专用通道，金融级安全保护，一体化解决企业各类需求。适用于注册登录、密码找回、支付验证、业务营销通知等各类场景。
          </p>
        </li>
        <li class="border border-gray-light p-4">
          <h3 class="mb-2 text-sm font-bold text-primary">公众号</h3>
          <p class="text-xs leading-loose text-content">
            便捷的手机话费流量充值缴费平台，为您提供最快速的充值服务和充值优惠信息。支持携号转网号码话费充值。更有超多话费活动、流量活动和充值活动，是您手机流量话费充值缴费的最优选择！
          </p>
        </li>
      </ol>
    </article>

    <article id="contact-us" class="pt-[80px]">
      <DetailSectionTitle title="联系我们" />
      <section class="flex">
        <img src="@/assets/img/location_kx.jpg" class="w-[600px]" />

        <address class="ml-14 text-base not-italic leading-[56px] text-title">
          <SvgIcon
            name="address"
            size="16"
            class="mr-1.5 inline-block fill-title"
          />地址：江苏省南京市江北新区文景路61号2栋324室<br />
          <SvgIcon
            name="telephone"
            size="16"
            class="mr-1.5 inline-block fill-title"
          />电话：<a href="tel:13913996954">13913996954</a><br />
          <SvgIcon
            name="email"
            size="16"
            class="mr-1.5 inline-block fill-title"
          />邮箱：<a href="mailto:13913996954@139.com">13913996954@139.com</a
          ><br />
          <SvgIcon
            name="contact"
            size="16"
            class="mr-1.5 inline-block fill-title"
          />联系人：杨峻<br />
          <SvgIcon
            name="postcode"
            size="16"
            class="mr-1.5 inline-block fill-title"
          />邮编：210000
        </address>
      </section>
    </article>
  </article>
</template>

<script setup></script>
