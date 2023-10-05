package br.com.hackforchange.dao;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.SQLException;

import br.com.hackforchange.bean.EscalaEBIA;
import br.com.hackforchange.jdbc.DatabaseManager;

public class EscalaEBIADAO {

	private Connection conexao;
	
	public void cadastrarEscalaEBIA(EscalaEBIA ebia) {
		
		PreparedStatement stmt = null;
		
		try {
			conexao = DatabaseManager.obterConexao();
			String query = "INSERT INTO escalaebia(ebiaum, ebiadois, ebiatres, ebiaquatro, ebiacinco,"
					+ "ebiaseis, ebiasete) VALUES(?, ?, ?, ?, ?, ?, ?)";
			stmt = conexao.prepareStatement(query);
			
			stmt.setInt(1, ebia.getEbiaUm());
			stmt.setInt(2, ebia.getEbiaDois());
			stmt.setInt(3, ebia.getEbiaTres());
			stmt.setInt(4, ebia.getEbiaQuatro());
			stmt.setInt(5, ebia.getEbiaCinco());
			stmt.setInt(6, ebia.getEbiaSeis());
			stmt.setInt(7, ebia.getEbiaSete());
			
			stmt.executeUpdate();
		} catch (SQLException e) {
			System.err.println(e.getMessage());
			e.printStackTrace();
		} finally {
			try {
				stmt.close();
				conexao.close();
			} catch (SQLException e) {
				System.err.println(e.getMessage());
				e.printStackTrace();
			}
		}
	}
}
