<%@ page language="java" contentType="application/json; charset=utf-8"	pageEncoding="utf-8" import="java.util.*"%>

<%
	request.setCharacterEncoding("utf-8");
	response.setCharacterEncoding("utf-8");
	
	String result="";	
	result="{"+'"'+"success"+'"'+":"+"true,"+'"'+"context"+'"'+":"+'"'+"hhhh"+'"'+"}";
	out.print(result);
	
	
%>