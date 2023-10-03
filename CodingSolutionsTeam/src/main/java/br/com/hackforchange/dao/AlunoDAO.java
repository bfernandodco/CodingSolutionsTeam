package br.com.hackforchange.dao;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.SQLException;

//import br.com.hackforchange.bean.Aluno;
import br.com.hackforchange.jdbc.DatabaseManager;

public class AlunoDAO {
	
	private Connection conexao;
	
	public void cadastrar() {
		try {
			conexao = DatabaseManager.obterConexao();
			String query = "INSERT INTO Aluno(nome, escola, serie, endereco)"
					+ " VALUES(?, ?, ?, ?) ";
			
			PreparedStatement stmt = conexao.prepareStatement(query);
			stmt.setString(1, "Teste");
			stmt.setString(2, "Escola");
			stmt.setString(3, "Serie");
			stmt.setString(4, "ENDEREÇO");
			
			stmt.executeUpdate();
		} catch (SQLException e) {
			System.err.println(e.getMessage());
			e.printStackTrace();
		} finally {
			try {
				conexao.close();
			} catch (SQLException e) {
				e.printStackTrace();
			}
		}
	}

}
