import React from 'react';
import { Page, Text, View, Document, StyleSheet, Image } from '@react-pdf/renderer';

// Create styles
const styles = StyleSheet.create({
	page: {
		display: "flex",
		flexDirection: "row",
		alignContent:"flex-start",
		justifyContent:"space-between",
		flexWrap:"wrap",
		fontSize:"15pt",
	},
	header: {
		alignSelf: "auto",
		width:"250px",
		margin:"20px 10px 50px 10px",
		border:"1px solid red"
	},
	tableHeader: {
		flexDirection: "row",
		alignContent:"center",
		justifyContent:"space-around",
		flexWrap:"wrap",
		width:"800px",
	},
	tableHeaderItemDescription: {
		backgroundColor:"gray",
		height:"20px",
		width:"60%"
	},
	tableHeaderItem: {
		backgroundColor:"gray",
		height:"20px",
		width:"10%"
	},
	tableBody: {
		flexDirection: "row",
		alignContent:"center",
		justifyContent:"space-around",
		flexWrap:"wrap",
		width:"800px",
		marginBottom:"10px"
	},
	tableBodyItemDescription: {
		width:"60%"
	},
	tableBodyItem: {
		width:"10%"
	},
	tableTotal: {
		flexDirection: "row",
		justifyContent:"flex-end",
		flexWrap:"wrap",
		width:"300px",
	},
	tableTotalItem: {
		border:"1px solid #cccccc",
		width:"50%"
	},
	backgrColor: {
		backgroundColor:"gray"
	},
	borderLeft: {
		borderLeft:"1px solid #cccccc"
	},
	borderRigth: {
		borderRight:"1px solid #cccccc",
	},
	borderBottom: {
		borderBottom:"1px solid #cccccc"
	},
	textPadding:{
		padding:"3px"
	}
});

// Create Document Component
function InvoicePdf({tableRowsValues, formValue, subtotal, total, currency}) { 
return(
	<Document>
		<Page size="A4" style={styles.page}>
			<View style={[styles.header]}>
				<Text style={{fontSize:"50pt"}}>INVOICE</Text>
				<Text>Invoice Number: {formValue.invoiceNumber}</Text>
				<Text>Date: {formValue.invoiceDate}</Text>
				<Text>Due date: {formValue.invoiceDueData}</Text>
			</View>
			<View style={styles.header}>
				<Image src={formValue.image} style={{width:"50%", marginLeft:"auto"}}></Image>
			</View>
			<View style={styles.header}>
				<Text>Invoice From:</Text>
				<Text>{formValue.personalInformation}</Text>
			</View>
			<View style={styles.header}>
				<Text>Bill to: {formValue.billTo}</Text>
			</View>
			<View style={styles.tableHeader}>
				<Text style={[styles.tableHeaderItem]}>Qty</Text>
				<Text style={[styles.tableHeaderItemDescription]}>Description</Text>
				<Text style={[styles.tableHeaderItem]}>Rate</Text>
				<Text style={[styles.tableHeaderItem]}>Tax</Text>
				<Text style={[styles.tableHeaderItem]}>Amount</Text>
			</View>
			{tableRowsValues.map((row, i) => 
				<View style={styles.tableBody}>
					<Text style={[styles.tableBodyItem, styles.borderLeft, styles.borderBottom]} key={i}>{row.quantity}</Text>
					<Text style={[styles.tableBodyItemDescription, styles.borderLeft, styles.borderRigth, styles.borderBottom]} key={i}>{row.itemDescription}</Text>
					<Text style={[styles.tableBodyItem, styles.borderRigth, styles.borderBottom]} key={i}>{row.rate}</Text>
					<Text style={[styles.tableBodyItem, styles.borderRigth, styles.borderBottom]} key={i}>{row.taxPercentage}%</Text>
					<Text style={[styles.tableBodyItem, styles.borderRigth, styles.borderBottom]} key={i}>{row.amount}</Text>
				</View>
			)}
			<View style={[styles.tableTotal, {marginLeft:"auto"}]}>
				<Text style={[styles.tableTotalItem , styles.textPadding]}>Subtotal</Text>
				<Text style={[styles.tableTotalItem, styles.textPadding]}>{currency}{subtotal}</Text>
				{tableRowsValues.map((row, i) => {
					if(row.taxPercentage !== 0) {
						return <tr key={`tax_key_${i}`}>
							<View style={[styles.tableTotal, styles.textPadding]}>
								<Text style={[styles.tableTotalItem, styles.textPadding]} key={i}>Tax ({row.taxPercentage}%)</Text>
								<Text style={[styles.tableTotalItem]} key={i}>{currency[1]}{row.taxAmount}</Text>
							</View>
						</tr>
					}
					return null;
            	})} 
				<Text style={[styles.tableTotalItem, styles.backgrColor, styles.textPadding]}>Total</Text>
				<Text style={[styles.tableTotalItem, styles.textPadding]}>{currency}{total}</Text>
			</View>
		</Page>
	</Document>
);
}

export default InvoicePdf;