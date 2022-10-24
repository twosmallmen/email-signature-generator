import {PhotoSignatureProps} from "./App";
//import Logo from "./assets/Logo.png";

let Logo ='https://twosmallmen.com/wp-content/uploads/2022/10/Logo.png'

const Signature = (props: PhotoSignatureProps) => {
    let instaIcon = 'https://twosmallmen.com/wp-content/uploads/2022/10/Insta-icon.png'
    let linkedinIcon = 'https://twosmallmen.com/wp-content/uploads/2022/10/linkedin-icon.png'
    let fbIcon = 'https://twosmallmen.com/wp-content/uploads/2022/10/facebook-icon.png'
    let youTubeIcon = 'https://twosmallmen.com/wp-content/uploads/2022/10/youtube-icon-v2.png'
    let instaURL = 'https://www.instagram.com/twosmallmencanada/?hl=en'
    let linkedURL = 'https://ca.linkedin.com/company/twosmallmencanada'
    let fbURL = 'https://www.facebook.com/twosmallmencanada/'
    let youtubeURL = 'https://www.youtube.com/channel/UCWoGM_yzOGsOffExAW4uQ2w'




    const signaturestyle = {
        height: "170px", 
        background: "#FFFFFF", 
        display: "inline-block"

      };

      const mainimagestyle = {
        width: "150px",
        height: "150px",
         margin: "20px"

      }
      const verticallinestyle = {
        borderRight: "2px solid #004193",
        height: "175px",
        marginLeft: "10px", 
        marginRight: "20px",
        paddingRight: "30px",

      }    

      const fullnamestyle = {

        fontFamily: "Bebas Neue, impact", 
        fontSize: "40px",
        color: "#004193",
        lineHeight: "20px",
        paddingTop: "15px",
        paddingBottom: "10px",
        marginTop:"25px",
        marginBottom:"15px",
      }

      const positionstyle ={


        paddingBottom: "10px",
        fontFamily: "Bebas Neue, impact",
        fontSize: "28px",
        color: "#007bff",
        lineHeight: "22px",
      }

      const phonewrapperstyle ={

        marginTop: "25px",
        display: "flex",
        fontFamily: "Work Sans",

      }

      const phoneicondivstyle ={

        marginRight: "5px",

      }

      const phoneiconstyle ={
        width: "16px",
    }

    const emailwrapperstyle ={
        marginTop: "5px", 
        display: "flex",
        fontFamily: "Work Sans",
    }

    const emailicondivstyle={
        marginRight: "5px",

    }

    const sociallogosstyle={
        marginTop: "5px",
        width: "150px", 
        display: "flex",
        alignItems: "flex-start",
        justifyContent: "space-between", 
        height: "32px",
    }

    const bannerstyle={
        marginTop: "10px",
        display: "flex",
    }

    const height133={
        height: "100px"
    }

    const height42={
        height: "42px"
    }

    const width5={
        width: "5%"
    }

    const width100={
        width: "100%"
    }
    const width80={
        width: "80%"
    }

    const pr5={
        paddingRight: "5px"
    }

    const pt5={
        paddingTop: "5px"
    }

    const padding0={
        padding: "0px 0px 0px 0px"
    }

    const vAlignMiddle={
        verticalAlign: "middle"
    }

    const width399={
        width: "399px"
    }

    const margin0={
        margin: "0px"
    }

    const fontSize18={
        fontSize: "18px"
    }

    const color004193={
        color: "#004193"
    }

    const bxZCMx={
        margin: "0px",
        color: "#007bff",
        fontSize: "14px",
        lineHeight: "16px"

    }

    const eQYmiW={
        verticalAlign: "-webkit-baseline-middle",
        fontSize: "medium",
        fontFamily: "Arial"

    }

    const width556={
        width: "556px"

    }

    const width30={
        width: "30px"

    }

    const vAlignBottom={
        verticalAlign: "bottom"
    }

    const bbyJzT={
        display: "block",
        backgroundColor: "#007bff"
        
    }

    const color404040={
        color: "#404040"
    }

    const iyhjGb={
        textDecoration: "none!important",
        color: "#404040",
        fontSize: "12px"

    }

    const byigni={
        
        display: "inline-block",
        backgroundColor: "transparent",
        color: "#ffffff",
       
        textDecoration: "none!important",
        lineHeight: "1",
        fontSize: "12px",
        borderRadius: "3px",
        border: "initial none initial"

    }

    const jjNSwx={
        textDecoration: "none!important",
        maxWidth: "728px",
        paddingTop: "5px"
        
    }

    

    

     let htmlCopy ='<div className="signaturebody"> <div className={"signature"} style= > <table class="sc-gPEVay eQYmiW" style="vertical-align: -webkit-baseline-middle; font-size: medium; font-family: Arial;" cellspacing="0" cellpadding="0"><tbody><tr><td><table style="vertical-align: -webkit-baseline-middle; font-size: medium; font-family: Arial; width: 556px; height: 100px;" cellspacing="0" cellpadding="0"><tbody><tr style="height: 1px;"><td style="padding: 0px 0px 0px 0px; vertical-align: middle; width: 399px; height: 1px;"><h3 class="sc-fBuWsC eeihxG" style="margin: 0px; font-size: 18px; color: #004193; ">'+props.fullName+'</h3><p class="sc-fMiknA bxZCMx" style="margin: 0px; color: #007bff; font-size: 14px; line-height: 16px;">'+props.position+'</p><table class="sc-gPEVay eQYmiW" style="vertical-align: -webkit-baseline-middle; font-size: medium; font-family: Arial; padding-top: 0px;" cellspacing="0" cellpadding="0"><tbody><tr style="vertical-align: middle;"><td style="vertical-align: middle;" width="30"><table class="sc-gPEVay eQYmiW" style="vertical-align: -webkit-baseline-middle; font-size: medium; font-family: Arial;" cellspacing="0" cellpadding="0"><tbody><tr><td style="vertical-align: bottom;"><span class="sc-jlyJG bbyJzT" style="display: block; background-color: #007bff;"><img class="sc-iRbamj blSEcj" style="display: block; background-color: #007bff;" src="https://cdn2.hubspot.net/hubfs/53/tools/email-signature-generator/icons/phone-icon-2x.png" width="13" /></span></td></tr></tbody></table></td><td style="padding: 0px;color: #404040;"><a class="sc-gipzik iyhjGb" style="text-decoration: none!important; color: #404040; font-size: 12px;" href="tel:'+props.phone+'">'+props.phone+'</a></td></tr><tr style="vertical-align: middle;"><td style="vertical-align: middle;" width="30"><table class="sc-gPEVay eQYmiW" style="vertical-align: -webkit-baseline-middle; font-size: medium; font-family: Arial;" cellspacing="0" cellpadding="0"><tbody><tr><td style="vertical-align: bottom;"><span class="sc-jlyJG bbyJzT" style="display: block; background-color: #007bff;"><img class="sc-iRbamj blSEcj" style="display: block; background-color: #007bff;" src="https://cdn2.hubspot.net/hubfs/53/tools/email-signature-generator/icons/email-icon-2x.png" width="13" /></span></td></tr></tbody></table></td><td style="padding: 0px;"><a class="sc-gipzik iyhjGb" style="text-decoration: none!important; color: #000000; font-size: 12px;" href="mailto:'+props.email+'@twosmallmen.com">'+props.email+'@twosmallmen.com</a></td></tr><tr style="vertical-align: middle;"><td style="vertical-align: middle;" width="30"><table class="sc-gPEVay eQYmiW" style="vertical-align: -webkit-baseline-middle; font-size: medium; font-family: Arial;" cellspacing="0" cellpadding="0"><tbody><tr><td style="vertical-align: bottom;"><span class="sc-jlyJG bbyJzT" style="display: block; background-color: #007bff;"><img class="sc-iRbamj blSEcj" style="display: block; background-color: #007bff;" src="https://cdn2.hubspot.net/hubfs/53/tools/email-signature-generator/icons/link-icon-2x.png" width="13" /></span></td></tr></tbody></table></td><td style="padding: 0px;"><a class="sc-gipzik iyhjGb" style="text-decoration: none!important; color: #000000; font-size: 12px;" href="https://twosmallmen.com">twosmallmen.com</a></td></tr></tbody></table></td></tr></tbody></table></td></tr><tr><td><a class="sc-fAjcbJ byigni" style="display: inline-block; background-color: transparent; color: #ffffff; font-weight: bold; text-decoration: none!important; text-align: center; line-height: 1; font-size: 12px; border-radius: 3px; border: initial none initial;" href="https://twosmallmen.com/about-us/giving-back/" target="_blank" rel="noopener noreferrer"><img class="sc-caSCKo jjNSwx" style="text-decoration: none!important; max-width: 728px; padding-top: 5px;" role="presentation" src="https://twosmallmen.com/wp-content/uploads/2022/10/TSM-Email-Banner-6.png" /></a></td></tr></tbody></table>'
  


    return (
    <div className="signaturebody">
                <div className={"signature"} style={signaturestyle} >

                <table className="sc-gPEVay eQYmiW" style={eQYmiW} cellSpacing="0" cellPadding="0">
<tbody>
<tr>
<td>
<table style={{...eQYmiW,...width556,...height133}} cellSpacing="0" cellPadding="0">
<tbody>
<tr style={height133}>
<td style={{...padding0, ...vAlignMiddle,...width399,...height133}}>
<h3 className="sc-fBuWsC eeihxG" style={{...margin0,...fontSize18,...color004193}}>{props.fullName}</h3>
<p className="sc-fMiknA bxZCMx" style={bxZCMx}>{props.position}</p>
<table className="sc-gPEVay eQYmiW" style={eQYmiW} cellSpacing="0" cellPadding="0">
<tbody>
<tr style={vAlignMiddle}>
<td style={{...vAlignMiddle,...width30}}>
<table className="sc-gPEVay eQYmiW" style={eQYmiW} cellSpacing="0" cellPadding="0">
<tbody>
<tr>
<td style={vAlignBottom}><span className="sc-jlyJG bbyJzT" style={bbyJzT}><img className="sc-iRbamj blSEcj" style={bbyJzT} src="https://cdn2.hubspot.net/hubfs/53/tools/email-signature-generator/icons/phone-icon-2x.png" width="13" /></span></td>
</tr>
</tbody>
</table>
</td>
<td style={{...padding0, ...color404040}}><a className="sc-gipzik iyhjGb" style={iyhjGb} href="tel:(250) 498-3996">(250) 498-3996</a></td>
</tr>
<tr style={vAlignMiddle}>
<td style={{...vAlignMiddle, ...width30}}>
<table className="sc-gPEVay eQYmiW" style={eQYmiW} cellSpacing="0" cellPadding="0">
<tbody>
<tr>
<td style={vAlignBottom}><span className="sc-jlyJG bbyJzT" style={bbyJzT}><img className="sc-iRbamjblSEcj" style={bbyJzT} src="https://cdn2.hubspot.net/hubfs/53/tools/email-signature-generator/icons/email-icon-2x.png" width="13" /></span></td>
</tr>
</tbody>
</table>
</td>
<td style={padding0}><a className="sc-gipzik iyhjGb" style={iyhjGb} href="mailto:'+{props.email}+'">{props.email}@twosmallmen.com</a></td>
</tr>
<tr style={vAlignMiddle}>
<td style={{...vAlignMiddle, ...width30}}>
<table className="sc-gPEVay eQYmiW" style={eQYmiW} cellSpacing="0" cellPadding="0">
<tbody>
<tr>
<td style={vAlignBottom}><span className="sc-jlyJG bbyJzT" style={bbyJzT}><img className="sc-iRbamj blSEcj" style={bbyJzT} src="https://cdn2.hubspot.net/hubfs/53/tools/email-signature-generator/icons/link-icon-2x.png" width="13" /></span></td>
</tr>
</tbody>
</table>
</td>
<td style={padding0}><a className="sc-gipzik iyhjGb" style={iyhjGb} href="https://twosmallmen.com">twosmallmen.com</a></td>
</tr>
</tbody>
</table>
</td>
</tr>
</tbody>
</table>
</td>
</tr>
<tr>
<td><a className="sc-fAjcbJ byigni" style={byigni} href="https://twosmallmen.com/about-us/giving-back/" target="_blank" rel="noopener noreferrer"><img className="sc-caSCKo jjNSwx" style={jjNSwx} role="presentation" src="https://twosmallmen.com/wp-content/uploads/2022/10/TSM-Email-Banner-6.png" /></a></td>
</tr>
</tbody>
</table>
                    
       

        </div>
        <div className="htmlcopy">
<div className="hubspot">{htmlCopy}</div>
</div>
        </div>
       
        
        

    );
};

export default Signature;
