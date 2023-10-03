package br.com.hackforchange.jdbc;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;

public class DatabaseManager {

	public static Connection obterConexao() {
		Connection conexao = null;
		try {
			conexao = DriverManager.getConnection(
					"jdbc:mysql://localhost:3306/hackathlon?user=root&password=fiapalura");
			System.out.println("Conexão estabelecida");
		} catch (SQLException e) {
			System.err.println(e.getMessage());
			e.printStackTrace();
		}
		return conexao;
	}
}
