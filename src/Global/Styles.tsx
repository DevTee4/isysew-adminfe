import styled, { css } from "styled-components";
import { StyleProps } from "./StyleProps";

const cssRules = css<StyleProps>`
   {
    background: ${(props) => (props.bg_color ? props.bg_color : "transparent")};
    cursor: ${(props) => (props.cursor ? props.cursor : "auto")};
    width: ${(props) => (props.width ? props.width : "auto")};
    height: ${(props) => (props.height ? props.height : "auto")};
    max-height: ${(props) => (props.max_height ? props.max_height : "auto")};
    margin: ${(props) => (props.margin ? props.margin : "")};
    margin-top: ${(props) => (props.margin_top ? props.margin_top : "")};
    margin-right: ${(props) => props.margin_right ? props.margin_right : ""};
    margin-bottom: ${(props) => props.margin_bottom ? props.margin_bottom : ""};
    margin-left: ${(props) => (props.margin_left ? props.margin_left : "")};
    padding: ${(props) => (props.padding ? props.padding : "")};
    padding-top: ${(props) => (props.padding_top ? props.padding_top : "")};
    padding-right: ${(props) => props.padding_right ? props.padding_right : ""};
    padding-bottom: ${(props) => props.padding_bottom ? props.padding_bottom : ""};
    padding-left: ${(props) => props.padding_left ? props.padding_left : ""};
    border: ${(props) => (props.border ? props.border : "")};
    border-top: ${(props) => (props.border_top ? props.border_top : "")};
    border-right: ${(props) => (props.border_right ? props.border_right : "")};
    border-bottom: ${(props) => (props.border_bottom ? props.border_bottom : "")};
    border-left: ${(props) => (props.border_left ? props.border_left : "")};
    color: ${(props) => (props.text_color ? props.text_color : "#004764")};
    box-shadow: ${(props) => (props.box_shadow ? props.box_shadow : "")};
    border-radius: ${(props) => props.corner_radius ? props.corner_radius : ""};
    display: ${(props) => props.display ? props.display : ""};
    font-size: ${(props) => (props.font_size ? props.font_size : "12px")};
    ${(props) => {
        return props.scroll && css`overflow: ${props.scroll};`
    }}
    max-height:${(props) => (props.max_height ? props.max_height : "inherit")};
    max-width:${(props) => (props.max_width ? props.max_width : "inherit")};
    min-width:${(props) => (props.min_width ? props.min_width : "inherit")};
    min-height:${(props) => (props.min_height ? props.min_height : "inherit")};
    text-align: ${(props) => (props.text_align ? props.text_align : "left")};
    vertical-align: ${(props) => (props.vertical_align ? props.vertical_align : "left")};
    ${(props) => (props.gap && css`gap: ${props.gap};`)}
    line-height: ${(props) => props.line_height && props.line_height};
  }
`;

// export const AppTable = styled(Table) <StyleProps>`
//    &&{
//     ${cssRules}
//     border-radius: ${(props) => props.corner_radius ? props.corner_radius : ""};
    
//   }
// `;
