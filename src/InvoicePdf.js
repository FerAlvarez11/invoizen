import React from 'react';
import { nanoid } from 'nanoid'
import { Page, Text, View, Document, StyleSheet, Image } from '@react-pdf/renderer';

const styles = StyleSheet.create({
	page: {
		display: "flex",
		flexDirection: "row",
		alignContent:"flex-start",
		justifyContent:"space-between",
		flexWrap:"wrap",
		fontSize:"12pt",
		padding:"0 20px 40px 20px",
		fontFamily: 'Courier'
	},
	header: {
		width:"250px",
		margin:"20px 0 50px 0px",
	},
	tableHeader: {
		flexDirection: "row",
		alignContent:"center",
		justifyContent:"space-around",
		flexWrap:"wrap",
		width:"800px",
	},
	tableHeaderItemDescription: {
		backgroundColor:"#cccccc",
		height:"30px",
		width:"40%",
		padding:"8px 3px",
	},
	tableHeaderItem: {
		backgroundColor:"#cccccc",
		height:"30px",
		width:"15%",
		padding:"8px 3px",
	},
	tableBody: {
		flexDirection: "row",
		alignContent:"center",
		justifyContent:"space-around",
		flexWrap:"wrap",
		width:"800px",
	},
	tableBodyItemDescription: {
		width:"40%",
		padding:"3px"	
	},
	tableBodyItem: {
		width:"15%",
		padding:"10px 3px 0 5px",
		height:"40px"
	},
	containerTableTotal:{
		marginTop:"10px",
	},
	tableTotal: {
		flexDirection: "row",
		flexWrap:"wrap",
		width:"300px"
	},
	tableTotalItem: {
		border:"1px solid #cccccc",
		width:"50%",
		padding:"3px"
	},
	backgroundColor: {
		backgroundColor:"#cccccc"
	},
	borderLeft: {
		borderLeft:"1px solid #cccccc"
	},
	borderRigth: {
		borderRight:"1px solid #cccccc",
	},
	borderBottom: {
		borderBottom:"1px solid #cccccc"
	}
});

function InvoicePdf({tableRowsValues, formValue, subtotal, total, currency}) { 
	const InvoiceDate = new Date(formValue.invoiceDate);
	const InvoiceDateConverted = InvoiceDate.getDate() + "-" + (InvoiceDate.getMonth() +1) + "-" + InvoiceDate.getFullYear();

	const InvoiceDueDate = new Date(formValue.invoiceDueDate);
	const InvoiceDueDateConverted = InvoiceDueDate.getDate() + "-" + (InvoiceDueDate.getMonth() +1) + "-" + InvoiceDueDate.getFullYear();

	return(
		<Document>
			<Page size="A4" style={styles.page}>
				<View style={[styles.header]}>
					<Text style={{fontSize:"30pt", marginBottom:"10px"}}>INVOICE</Text>
					{formValue.invoiceId !== null ? 
						<Text style={{marginBottom:"5px"}}>#{formValue.invoiceId}</Text> : null
					}
					<Text>{formValue.personalInformation}</Text>
				</View>
				<View style={styles.header}>
					{/* <Image src={formValue.image} style={{width:"50%", marginLeft:"auto"}}></Image> */}
				</View>
				{formValue.billTo !== null ?
					<View style={styles.header}>						
						<Text style={{marginBottom:"5px"}}>Bill to:</Text>
						<Text>{formValue.billTo}</Text>				
					</View> : null
				}
				<View style={styles.header}>

						<Text>Date: {InvoiceDateConverted}</Text>
						<Text>Due date: {InvoiceDueDateConverted}</Text>
				</View>
				<View style={styles.tableHeader}>
					<Text style={[styles.tableHeaderItem]}>Qty</Text>
					<Text style={[styles.tableHeaderItemDescription]}>Description</Text>
					<Text style={[styles.tableHeaderItem]}>Rate</Text>
					<Text style={[styles.tableHeaderItem]}>Tax</Text>
					<Text style={[styles.tableHeaderItem]}>Amount</Text>
				</View>
				{tableRowsValues.map((row, i) => 
					<View key={nanoid()} style={styles.tableBody}>
						<Text style={[styles.tableBodyItem, styles.borderLeft, styles.borderBottom]}>{row.quantity}</Text>
						<Text style={[styles.tableBodyItemDescription, styles.borderLeft, styles.borderRigth, styles.borderBottom]}>{row.itemDescription}</Text>
						<Text style={[styles.tableBodyItem, styles.borderRigth, styles.borderBottom]}>{row.rate}</Text>
						<Text style={[styles.tableBodyItem, styles.borderRigth, styles.borderBottom]}>{row.taxPercentage}%</Text>
						<Text style={[styles.tableBodyItem, styles.borderRigth, styles.borderBottom]}>{currency[1]}{row.amount}</Text>
					</View>
				)}
				<View style={[styles.containerTableTotal, {marginLeft:"auto"}]}>
					<View style={styles.tableTotal}>
						<Text style={[styles.tableTotalItem]}>Subtotal</Text>
						<Text style={[styles.tableTotalItem]}>{currency[1]}{subtotal}</Text>
						{tableRowsValues.map((row, i) => {
							if(row.taxPercentage !== 0) {
								return <tr key={nanoid()}>
									<View style={[styles.tableTotal]}>
										<Text style={[styles.tableTotalItem]}>Tax ({row.taxPercentage}%)</Text>
										<Text style={[styles.tableTotalItem]}>{currency[1]}{row.taxAmount}</Text>
									</View>
								</tr>
							}
							return null;
						})} 
						<Text style={[styles.tableTotalItem, styles.backgroundColor]}>Total</Text>
						<Text style={[styles.tableTotalItem]}>{currency[1]}{total}</Text>
					</View>
				</View>
			</Page>
		</Document>
	);
}

export default InvoicePdf;