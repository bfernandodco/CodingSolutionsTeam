package br.com.hackforchange.dao;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.SQLException;

import br.com.hackforchange.bean.EscalaKutcher;
import br.com.hackforchange.jdbc.DatabaseManager;

public class EscalaKutcherDAO {

	private Connection conexao;
	
	public void cadastrarKutcher(EscalaKutcher kutcher) {
		
		PreparedStatement stmt = null;
		
		try {
			conexao = DatabaseManager.obterConexao();
			String query = "INSERT INTO escalakutcher(kutcherum, kutcherdois, kutchertres,"
					+ " kutcherquatro, kutchercinco, kutcherseis, kutchersete, kutcheroito,"
					+ "kutchernove, kutcherdez, kutcheronze) VALUES("
					+ "?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
			stmt = conexao.prepareStatement(query);
			
			stmt.setInt(1, kutcher.getKutcherUm());
			stmt.setInt(2, kutcher.getKutcherDois());
			stmt.setInt(3, kutcher.getKutcherTres());
			stmt.setInt(4, kutcher.getKutcherQuatro());
			stmt.setInt(5, kutcher.getKutcherCinco());
			stmt.setInt(6, kutcher.getKutcherSeis());
			stmt.setInt(7, kutcher.getKutcherSete());
			stmt.setInt(8, kutcher.getKutcherOito());
			stmt.setInt(9, kutcher.getKutcherNove());
			stmt.setInt(10, kutcher.getKutcherDez());
			stmt.setInt(11, kutcher.getKutcherOnze());
			
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
