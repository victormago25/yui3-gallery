YUI.add("gallery-editor-plus",function(b){var a;b.namespace("Xarno").EditorPlus=b.Base.create("gallery-editor-plus",b.Widget,[b.WidgetStdMod],{_toolbar:null,_editor:null,_path:null,initializer:function(){},renderUI:function(){var c=new b.EditorBase({content:"<strong>Strong</strong> bar"});this.setStdModContent("body","");c.plug([b.Plugin.EditorBiDi,b.Plugin.EditorBr,b.Plugin.EditorLists,b.Plugin.EditorPara,b.Plugin.EditorTab]);this._editor=c;},bindUI:function(){var c=this._editor;c.on("frame:ready",this._onEditorReady,this);c.after("nodeChange",this._afterNodeChange,this);},syncUI:function(){var c=this.get("contentBox"),d=this._editor;d.render(c.one(".yui3-widget-bd"));},resizeFrame:function(){var c=this.get("contentBox").get("region");this._editor.frame.setAttrs({width:c.width,height:c.height});},_onEditorReady:function(d){var c=this._editor;c.focus();a=c.getInstance();this.set("isReady",true);this.resizeFrame();},_afterNodeChange:function(d){var c=b.Node.create("<ul>");d.dompath.each(function(e){c.append("<li>"+e.get("tagName")+"</li>");},this);this.setStdModContent("footer",c);}},{ATTRS:{isReady:{value:false},toolbar:{value:["b","i","u","|","align-left","align-center","align-right","|","font-family","font-size","styles"]}}});},"@VERSION@",{requires:["widget","widget-stdmod","base-build","editor"],skinnable:false});